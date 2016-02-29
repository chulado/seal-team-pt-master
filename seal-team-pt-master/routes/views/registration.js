var keystone = require('keystone'),
  Registration = keystone.list('Registration'),
  Location = keystone.list("Location"),
  MembershipType = keystone.list("MembershipType");

var stripe = require("stripe")(process.env.STRIPE_KEY);

exports = module.exports = function(req, res) {
  
  var view = new keystone.View(req, res),
    locals = res.locals;
  
  // Set locals
  locals.states = Registration.fields.state.ops;

  locals.formData = req.body || {};
  locals.validationErrors = {};
  locals.step = "one";

  function loadLocations(next) {
    Location.model.find().exec().then(function(locations){
      locals.locations = locations;
      next();
    });
  }

  function loadMembershipTypes(next) {
    MembershipType.model.find().exec().then(function(types) {
      locals.membershipTypes = types;
      next();
    });
  }

  view.on('get', loadLocations);
  view.on('get', loadMembershipTypes);

  view.on('post', loadLocations);
  view.on('post', loadMembershipTypes);
  
  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'registration-1' }, function(next) {
    
    var registration = new Registration.model(),
      updater = registration.getUpdateHandler(req);
      
    updater.process(req.body, {
      flashErrors: true,
      fields: 'name, email, phone, address, city, state, zip, birthday, location, contractLength, membershipType, tshirt, nameReferral, telephoneReferral, emailReferral, nameReferredBy',
      errorMessage: 'There was a problem submitting your registration:'
    }, function(err) {
      console.log('err', err);
      if (err) {
        locals.validationErrors = err.errors;
        loadLocations(function(){
          locals.locations.forEach(function(location){
            if(location.id == registration.location)
              locals.location = location;
          });
          next();
        });
      } else {
        locals.step = "two";
        locals.registration = registration;
        loadLocations(function(){
          locals.locations.forEach(function(location){
            if(location.id == registration.location)
              locals.location = location;
          });
          next();
        });
      }
    });
    
  });

  view.on('post', { action: 'registration-2' }, function(next) {
    Registration.model.findOne({'_id': req.body.registration}).populate('membershipType').exec().then(function(registration){
      var updater = registration.getUpdateHandler(req);
      updater.process(req.body, {
        flashErrors: true,
        fields: "signature",
        errorMessage: "There was a problem submitting your registration:"
      }, function(err){
        if (err) {
          console.log("err", err.errors);
          locals.validationErrors = err.errors;
          locals.step = "two";
          next();
        } else {
          locals.step = "three";
          locals.dueToday = registration.membershipType.price;
          locals.stripeAmount = Math.round(registration.membershipType.price / Math.pow(10,-2));
          locals.registration = registration;
          next();
        }
      });
    });
  });

  view.on('post', { action: 'registration-3' }, function(next) {
    Registration.model.findOne({'_id': req.body.registration}).populate('membershipType').exec().then(function(registration){
      var updater = registration.getUpdateHandler(req);
      updater.process(req.body, {
        flashErrors: true,
        fields: "stripeToken, stripeEmail",
        errorMessage: "There was a problem submitting your registration:"
      }, function(err){
        if (err) {
          console.log("err", err.errors);
          locals.validationErrors = err.errors;
          locals.step = "three";
          next();
        } else {

          // (Assuming you're using express - expressjs.com)
          // Get the credit card details submitted by the form
          var stripeToken = req.body.stripeToken;
          if(!stripeToken) return;

          stripe.charges.create({
            amount: Math.round(registration.membershipType.price / Math.pow(10,-2)), // amount in cents, again
            currency: "usd",
            card: stripeToken,
            description: "New Member Registration Fee"
          }, function(err, charge) {
            if (err) {
              // The card has been declined
              console.log("CARD ERROR", err);
              locals.validationErrors = err;
              locals.step = "three";
              return next();
            }

            registration.stripeCharge = JSON.stringify(charge);
            registration.save();

            locals.step = "done";
            locals.registration = registration;
            next();
          });
        }
      });
    });
  });
  
  view.render('membership/registration');
  
};

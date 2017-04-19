var keystone = require('keystone'),
  Types = keystone.Field.Types;

/**
 * Registration Model
 * ==========
 */

var Registration = new keystone.List('Registration', {
  nocreate: true
});

Registration.add({
  name: { type: Types.Name, required: true },
  nameReferredBy: { type: Types.Name, required: false },
  email: { type: Types.Email, required: true },
  address: { type: Types.Textarea, required: true },
  city: { type: String, required: true },
  state: { type: Types.Select, options: require("../lib/states"), required: true, emptyOption: false },
  zip: { type: String, required: true },
  phone: { type: String, required: true },
 /* leave off 2/2017
  birthday: { type: Types.Date, required: true },
  */
  location: { type: Types.Relationship, ref: 'Location', many: false, required: true },
  contractLength: { type: String },
  tshirt: { type: String },
  couponCode: { type: String, required: false },
  nameReferral: { type: Types.Name, required: false },
  telephoneReferral: { type: String, required: false },
  emailReferral: { type: String, required: false },
  signature: { type: String },
  date: { type: Date, default: Date.now },
  stripeToken: { type: String },
  stripeEmail: { type: String },
  stripeCharge: { type: String },
  membershipType: { type: Types.Relationship, ref: 'MembershipType', many: false, required: true } 
});


Registration.schema.post('save', function() {
  if (this.stripeCharge && this.stripeCharge.length > 0) {
    this.sendNotificationEmail();
  }
});

Registration.schema.methods.sendNotificationEmail = function(callback) {
  
  var enqiury = this;
  
  keystone.list('User').model.find().where('isAdmin', true).exec(function(err, admins) {
    if (err) return callback(err);
    
    new keystone.Email('registration-notification').send({
      to: admins,
      from: {
        name: 'SEAL Team Physical Training',
        email: 'spttmailbox@gmail.com'
      },
      subject: 'New Bootcamp Registration',
      registration: enqiury
    }, function(){
      if(callback) callback.apply(this, arguments);
    });
    
    new keystone.Email('registration-receipt').send({
      to: enqiury.email,
      from: {
        name: 'SEAL Team Physical Training',
        email: 'admin@sealteampt.com'
      },
      subject: 'Your Registration at SEAL Team Physical Training',
      registration: enqiury
    }, function(){
      if(callback) callback.apply(this, arguments);
    });
    
  });
  
}

Registration.defaultColumns = 'name, email|20%, phone|20%, location|20%';
Registration.register();

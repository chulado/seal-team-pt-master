var keystone = require('keystone'),
  Registration = keystone.list('Registration');

exports = module.exports = function(req, res) {
	var id = req.param("id");

	var view = new keystone.View(req, res),
	  locals = res.locals;

	Registration.model.findOne({_id: id}).populate("location").exec().then(function(registration){
		locals.registration = registration;
		locals.location = registration.location;
		locals.showSignature = true;
		locals.layout = "contract";
		view.render("partials/contract");
	});
};

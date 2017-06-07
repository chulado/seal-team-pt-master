var keystone = require('keystone'),
	TeamTraining = keystone.list('TeamTraining');

exports = module.exports = function(templateName) {
	return function(req, res) {
	
		var view = new keystone.View(req, res),
			locals = res.locals;
		
		// Set locals
		locals.section = 'contact';
		locals.formData = req.body || {};
		locals.validationErrors = {};
		locals.enquirySubmitted = false;
		
		// On POST requests, add the Enquiry item to the database
		view.on('post', { action: 'contact' }, function(next) {
			
			var newTeamTraining = new TeamTraining.model(),
				updater = newTeamTraining.getUpdateHandler(req);
			
			updater.process(req.body, {
				flashErrors: true,
				fields: 'name, email, phone, team, location, dates, duration, sport, division, conference, participants, age, gender, budget, referral, goals',
				errorMessage: 'There was a problem submitting your enquiry:'
			}, function(err) {
				if (err) {
					console.log(err.errors);
					locals.validationErrors = err.errors;
				} else {
					locals.enquirySubmitted = true;
				}
				next();
			});
			
		});
		
		view.render(templateName);
	};
};

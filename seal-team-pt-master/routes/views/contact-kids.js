var keystone = require('keystone'),
	Kids = keystone.list('Kids');

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
			
			var newKids = new Kids.model(),
				updater = newKids.getUpdateHandler(req);
			
			updater.process(req.body, {
				flashErrors: true,
				fields: 'name, email, phone, message',
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

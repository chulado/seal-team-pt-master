var keystone = require('keystone'),
	Enquiry = keystone.list('Enquiry');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'contact';
	locals.enquiryTypes = Enquiry.fields.enquiryType.ops;
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;

	var viewName = "trial";
	
	// On POST requests, add the Enquiry item to the database
	view.on('post', { action: 'contact' }, function(next) {
		
		var newEnquiry = new Enquiry.model(),
			updater = newEnquiry.getUpdateHandler(req);

		req.body.enquiryType = "other";
		req.body.message = "I would like a free trial at: "+req.body.location;
		
		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, email, phone, enquiryType, message',
			errorMessage: 'There was a problem submitting your enquiry:'
		}, function(err) {
			if (err) {
				console.log("error!", err.errors);
				locals.validationErrors = err.errors;
			} else {
				locals.enquirySubmitted = true;
			}
			next();
		});
		
	});

	view.render(viewName);
	
	
};

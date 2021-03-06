var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Enquiry Model
 * =============
 */

var Enquiry = new keystone.List('Enquiry', {
	nocreate: true,
	noedit: true
});

Enquiry.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email, required: true },
	phone: { type: String },
	enquiryType: { type: Types.Select, options: [
		{ value: 'message', label: "Just leaving a message" },
		{ value: 'question', label: "I've got a question" },
		{ value: 'media-request', label: "Media request" },
		{ value: "seal-team-training", label: "2 week boot camp" },
		{ value: "membership", label: "Membership" },
		{ value: "speaking", label: "Motivational speaking" },
		{ value: "corporate-training", label: "Corporate team training" },
		{ value: "free-class", label: "Free workout" },
	] },
	message: { type: Types.Markdown, required: true },
	createdAt: { type: Date, default: Date.now }
});

Enquiry.schema.pre('save', function(next) {
	this.wasNew = this.isNew;
	next();
})

Enquiry.schema.post('save', function() {
	if (this.wasNew) {
		this.sendNotificationEmail();
	}
});

Enquiry.schema.methods.sendNotificationEmail = function(callback) {
	
	var enqiury = this;
	
	keystone.list('User').model.find().where('isAdmin', true).exec(function(err, admins) {
		
		if (err) return callback(err);
		
		new keystone.Email('enquiry-notification').send({
			to: admins,
			from: {
				name: 'SEAL Team Physical Training',
				//email: 'spttmailbox@gmail.com'
				email: 'admin@sealteampt.com'
			},
			subject: 'New Enquiry for SEAL Team Physical Training',
			enquiry: enqiury
		}, callback);
		
	});
	
}

Enquiry.defaultSort = '-createdAt';
Enquiry.defaultColumns = 'name, email, enquiryType, createdAt';
Enquiry.register();

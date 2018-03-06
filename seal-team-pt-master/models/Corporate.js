var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Corporate Model
 * =============
 */

var Corporate = new keystone.List('Corporate', {
	nocreate: true,
	noedit: true
});

Corporate.add({
	name: { type: Types.Name, required: true },
	company: { type: String, required: true },
	email: { type: Types.Email, required: true },
	phone: { type: String },
	message: { type: Types.Markdown, required: true },
	createdAt: { type: Date, default: Date.now }
});

Corporate.schema.pre('save', function(next) {
	this.wasNew = this.isNew;
	next();
})

Corporate.schema.post('save', function() {
	if (this.wasNew) {
		this.sendNotificationEmail();
	}
});

Corporate.schema.methods.sendNotificationEmail = function(callback) {
	
	var enquiry = this;
	
	keystone.list('User').model.find().where('isAdmin', true).exec(function(err, admins) {
		
		if (err) return callback(err);
		
		new keystone.Email('enquiry-notification').send({
			to: admins,
			from: {
				name: 'SEAL Team Physical Training',
				//email: 'spttmailbox@gmail.com'
				email: 'admin@sealteampt.com'
			},
			subject: 'Corporate Team Building',
			enquiry: enquiry
		}, callback);
		
	});
	
}

Corporate.defaultSort = '-createdAt';
Corporate.defaultColumns = 'name, email, createdAt';
Corporate.register();

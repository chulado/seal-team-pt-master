var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Kids Model
 * =============
 */

var Kids = new keystone.List('Kids', {
	nocreate: true,
	noedit: true
});

Kids.add({
	name: { type: Types.Name, required: true },
	company: { type: String, required: true },
	email: { type: Types.Email, required: true },
	phone: { type: String },
	message: { type: Types.Markdown, required: true },
	createdAt: { type: Date, default: Date.now }
});

Kids.schema.pre('save', function(next) {
	this.wasNew = this.isNew;
	next();
})

Kids.schema.post('save', function() {
	if (this.wasNew) {
		this.sendNotificationEmail();
	}
});

Kids.schema.methods.sendNotificationEmail = function(callback) {
	
	var enquiry = this;
	
	keystone.list('User').model.find().where('isAdmin', true).exec(function(err, admins) {
		
		if (err) return callback(err);
		
		new keystone.Email('enquiry-notification').send({
			to: admins,
			from: {
				name: 'SEAL Team Physical Training',
				email: 'spttmailbox@gmail.com'
				//email: 'admin@sealteampt.com'
			},
			subject: 'Programs for Kids',
			enquiry: enquiry
		}, callback);
		
	});
	
}

Kids.defaultSort = '-createdAt';
Kids.defaultColumns = 'name, email, createdAt';
Kids.register();

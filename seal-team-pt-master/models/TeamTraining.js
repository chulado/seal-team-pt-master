var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * TeamTraining Model
 * =============
 */

var TeamTraining = new keystone.List('TeamTraining', {
	nocreate: true,
	noedit: true
});

TeamTraining.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email, required: true },
	phone: { type: String },
	team: { type: String, required: true },
	location: { type: String, required: true },
	dates: { type: String, required: true },
	duration: { type: String, required: true },
	sport: { type: String, required: true },
	division: { type: String, required: true },
	conference: { type: String, required: true },
	participants: { type: String, required: true },
	age: { type: String, required: true },
	gender: { type: String, required: true },
	budget: { type: String, required: true },
	referral: { type: String, required: true },
	goals: { type: Types.Markdown, required: true },
	createdAt: { type: Date, default: Date.now }
});

TeamTraining.schema.pre('save', function(next) {
	this.wasNew = this.isNew;
	next();
})

TeamTraining.schema.post('save', function() {
	if (this.wasNew) {
		this.sendNotificationEmail();
	}
});

TeamTraining.schema.methods.sendNotificationEmail = function(callback) {
	
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
			subject: 'Athletic Team Training',
			enquiry: enquiry
		}, callback);
		
	});
	
}

TeamTraining.defaultSort = '-createdAt';
TeamTraining.defaultColumns = 'name, email, createdAt';
TeamTraining.register();

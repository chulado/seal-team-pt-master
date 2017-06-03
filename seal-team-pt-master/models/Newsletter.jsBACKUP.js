var keystone = require('keystone'),
  Types = keystone.Field.Types;

/**
 * Newsletter Model
 * =============
 */

var Newsletter = new keystone.List('Newsletter', {
  nocreate: true,
  noedit: true
});

Newsletter.add({
  email: { type: Types.Email, required: true },
  createdAt: { type: Date, default: Date.now }
});

Newsletter.schema.pre('save', function(next) {
  this.wasNew = this.isNew;
  next();
})

Newsletter.schema.post('save', function() {
  if (this.wasNew) {
    this.sendNotificationEmail();
  }
});

Newsletter.schema.methods.sendNotificationEmail = function(callback) {
  
  var enqiury = this;
  
  keystone.list('User').model.find().where('isAdmin', true).exec(function(err, admins) {
    if (err) return callback(err);
    
    new keystone.Email('newsletter-notification').send({
      to: admins,
      from: {
        name: 'SEAL Team Physical Training',
        email: 'spttmailbox@gmail.com'
      },
      subject: 'Newsletter Subscription',
      enquiry: enqiury
    }, function(){
      if(callback) callback.apply(this, arguments);
    });
    
  });
  
}

Newsletter.defaultSort = '-createdAt';
Newsletter.defaultColumns = 'name, email, NewsletterType, createdAt';
Newsletter.register();

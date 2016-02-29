var keystone = require('keystone'),
  Newsletter = keystone.list('Newsletter');

exports = module.exports = function(req, res) {
  
  var view = new keystone.View(req, res),
    locals = res.locals;

  // On POST requests, add the Enquiry item to the database
  
  var newEnquiry = new Newsletter.model(),
    updater = newEnquiry.getUpdateHandler(req);
  
  updater.process(req.body, {
    flashErrors: true,
    fields: 'email',
  }, function(err) {
    if (err) {
      res.status(500);
      res.send(err.errors);
    } else {
      res.status(200);
      res.send({status: "success"});
    }
  });
  
  
};

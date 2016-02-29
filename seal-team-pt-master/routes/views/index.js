var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	locals.data = {
		posts: [],
		categories: []
	};

	// Load the posts
	// view.on('init', function(next) {
		
	// 	// var q = keystone.list('Post').paginate({
	// 	// 		page: req.query.page || 1,
	// 	// 		perPage: 6,
	// 	// 	})
	// 	// 	.where('state', 'published')
	// 	// 	.sort('-publishedDate')
	// 	// 	.populate('author categories');
		
	// 	// q.exec(function(err, results) {
	// 	// 	locals.data.posts = results;
	// 	// 	next(err);
	// 	// });
		
	// });
	
	// Render the view
	view.render('index');
	
};

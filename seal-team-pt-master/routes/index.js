/**
 * This file is where you define your application routes and controllers.
 * 
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 * 
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 * 
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 * 
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 * 
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var _ = require('underscore'),
	keystone = require('keystone'),
	middleware = require('./middleware'),
	importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api')
};

// Quick and dirty static page function:
function staticPage(template) {
	return function(req, res) {
	  var view = new keystone.View(req, res),
	    locals = res.locals;
	  // Render the view
	  view.render(template);	  
	};
}

// Setup Route Bindings
exports = module.exports = function(app) {
	
// 301 Redirects
	app.get("/training/school-athletic-training", function(req, res) { res.redirect(301, "http://sealteampt.com/programs/team-building/athletic"); }); 
	app.get("/component/k2/itemlist/category/2-stpt2", function(req, res) { res.redirect(301, "http://sealteampt.com/programs/team-building/athletic"); });
	app.get("/training/seal-teens", function(req, res) { res.redirect(301, "http://sealteampt.com/programs/kids"); });	
	app.get("/about/instructors", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/training/trial-workout-days", function(req, res) { res.redirect(301, "http://sealteampt.com/trial"); });
	app.get("/about/mission-a-philosophy", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); });
	app.get("/training", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); });
	app.get("/about/john-s-message", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); });  
	app.get("/philadelphia", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });  
	app.get("/about/testimonials", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/about/john-mcguire-s-cnn-interview", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); }); 
	app.get("/basic-fitness-class", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); }); 
	app.get("/about/motivational-speaking", function(req, res) { res.redirect(301, "http://sealteampt.com/programs/motivational-speaking"); });
	app.get("/component/k2/item/34-brooke_page", function(req, res) { res.redirect(301, "http://sealteampt.com/"); }); 
	app.get("/about/membership", function(req, res) { res.redirect(301, "http://sealteampt.com/join/register"); });      
	app.get("/about/faq", function(req, res) { res.redirect(301, "http://sealteampt.com/faqs"); });
	app.get("/component/content/article?catid=78&id=19:message", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });  
	app.get("/component/k2/item/53-philadelphia", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/login", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/membership", function(req, res) { res.redirect(301, "http://sealteampt.com/join/register"); });
	app.get("http://www.sealteampt.com/index.php?option=com_content&task=view&id=227&Itemid=", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/training/basic-fitness-class", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); });
	app.get("/fitness-class", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); });
	app.get("/component/k2/item/35-navy-seal-charities", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/index.php/free-intro-class/gear-advice.html", function(req, res) { res.redirect(301, "http://sealteampt.com/trial"); });
	app.get("/about/testimonials/written", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/about/instructors/category/6-jennifer-gardner", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/index.php/news/news-videos.html", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/index.php/training/marathons", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/membership/member-spotlights", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/component/k2/item/47-style-weekly-seal-team-pt", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/component/k2/item/50-university-of-toledo-basketball-and-seal-team-pt", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/%20http:/online.wsj.com/article/SB10001424127887324851704578133092287446634.html", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/about/testimonials/videos", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/component/k2/item/54-wsj", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/component/k2/itemlist/user/42-superuser", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/pagedetailhd1.asp?sid=22", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/component/k2/itemlist/user/769-kenlyle", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/component/k2/item/45-wnbas-washington-mystics-use-seal-team-pt-for-team-building-exercise", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/training/vcu-rams-men-s-basketball", function(req, res) { res.redirect(301, "http://sealteampt.com/programs/team-building/athletic"); });
	app.get("/component/k2/item/52-randolph", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/component/k2/item/14-john_cnn", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/index.php/component/k2/item/15-stpt_si", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/component/k2/item/53-philly2012", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/component/k2/item/16-david-guetta", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/public_html_2012/images/bfcreg.pdf", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/component/k2/item/38-stpt-cbs6", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/public_html_2012/index.php/news/53-john-mcguire-featured-on-cnn-about-the-seal-rescue-in-somalia.html", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/component/k2/item/48-corinna-coffin", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/public_html_2012/index.php/news/38", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/public_html_2012/", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/index.php?option=com_content&task=view&id=212&Itemid=78", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/philly", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/public_html_2012/index.php/news/44", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/public_html_2012/index.php/news/14-home/50-vcu.html", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/2012-winter-incentive-program", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/component/k2/item/55-abc8-news-covers-stpt-motivating-richmonders", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/public_html_2012/index.php/news/news-videos.html", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/public_html_2012/index.php/news/48", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/public_html_2012/index.php/news/47", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/public_html_2012/index.php/news/42", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/index.php/news/14-home/43-getting-in-ship-shape-form-seal-training-program-will-do-the-trick.html", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/public_html_2012/index.php/news/49", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/public_html_2012/index.php/testemonials/videos/3-videos/detail/10-amy.html?tmpl=component", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/index.php/prt", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/component/k2/itemlist/user/index.php/news/news-videos.html", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/postinfo.html", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/undefined", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/flash/STPT_player00.htm", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/tv/wtvr.html", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/content/view/20/", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/content/view/326/203/", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/content/view/212/78/", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/public_html_2012/images/sealkidsreg.pdf", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/index.php/news/news-videos/8-news-videos/detail/33-navy-seal-john-mcguire-on-cnn-john-king-show-3-may-2011.html?tmpl=component&phocaslideshow=0", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); });
	app.get("/vishal-verma", function(req, res) { res.redirect(301, "http://sealteampt.com/"); });
	app.get("/me", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/7323/SocialSite/ThirdPartyAccount/HandleInTheMiddleOfSessionSignOut", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/7323/SocialSite/ThirdPartyAccount/HandleInTheMiddleOfSessionSignIn", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/barrie-mcdowell", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/7323/Office/Signup", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/about/instructors/8-news-videos/detail/34-remembering-our-fallen-cbs-6-richmond-12-aug-2011?phocaslideshow=1&tmpl=component", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })
	app.get("/public_html_2012/index.php/news/36", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/index.php/news/62-join-seal-team-pt-for-the-ultimate-outdoor-fitness-experience.html", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/index.php/membership/86-members-news-flash/33-90day-challenge.html", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })
	app.get("/index.php/about/instructors/3-videos/detail/26-tony.html?tmpl=component", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/about/instructors/category/50-instructors-for-seal-team-physical-training-nicole-frost", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/public_html_2012/index.php/about/instructors.html", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/public_html_2012/index.php/about/instructors/category/17-jim-driggs.html", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/public_html_2012/index.php/about/instructors/category/6-jennifer-gardner.html", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/about/instructors/category/33-aaron-zdinakAaron", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/sealteamptfans/photos/a.10152740079344404.1073742174.47579429403/10152740079804404/?type=1", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/sealteamptfans/photos/a.415264589403.190604.47579429403/10152737877719404/?type=1", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/sealteamptfans/photos/pcb.10152737889509404/10152737888434404/?type=1", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/sealteamptfans/photos/pcb.10152737889509404/10152737888364404/?type=1", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/sealteamptfans/photos/a.10152747223314404.1073742176.47579429403/10152747223549404/?type=1", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/sealteamptfans/photos/a.10152747223314404.1073742176.47579429403/10152747223709404/?type=1", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/about/instructors/3-videos/detail/19-john?tmpl=component", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/public_html_2012/index.php/about/instructors/category/9-rusty-mcguire.html", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/public_html_2012/index.php/training/school-athletic-training/81-contact/20-contact-us.html", function(req, res) { res.redirect(301, "http://sealteampt.com/programs/team-building/athletic"); })
	app.get("/images/", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/images/Forms_2013/Hold_Request_Form_2013.pdf", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/public_html_2012/index.php/testemonials/videos/3-videos/detail/26-tony.html?tmpl=component", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })
	app.get("/public_html_2012/index.php/about/instructors/8-news-videos/detail/40-sniper.html?tmpl=component", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })
	app.get("/about/instructors/21-jeff-elgin/detail/59-jeff-elgin", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/public_html_2012/index.php/about/instructors/category/5-carol-house.html", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/public_html_2012/index.php/about/instructors/category/23-nicole-prairie.html", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/public_html_2012/index.php/about/instructors/category/22-joel-robb.html", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/images/Forms_2013/Waiver_2013.pdf", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/public_html_2012/index.php/about/instructors/category/12-jeanie-trent.html", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/training/basic-fitness-class?id=60", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); })
    app.get("/about/instructors/15-deane-cheatham/detail/53-deane-cheatham?tmpl=component", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/index.php/about/instructors/category/12-jeanie-trent.html", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/index.php/about/instructors/category/22-joel-robb", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/index.php/about/instructors/category/19-travis-gardner.html", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/public_html_2012/index.php/about/instructors/8-news-videos/detail/33-navy-seal-john-mcguire-on-cnn-john-king-show-3-may-2011.html?tmpl=component", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/index.php/training/basic-fitness-class?id=60", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); })
	app.get("/public_html_2012/index.php/training.html", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); })
	app.get("/courses.html", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/public_html_2012/index.php/training/corporate-training.html", function(req, res) { res.redirect(301, "http://sealteampt.com/programs/team-building/corporate"); })
	app.get("/basic-fitness", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); })
	app.get("/steve-eldridge", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/about/instructors/8-news-videos/detail/38-cbc-connect-with-mark-kelly-canada-news-6-may-2011?tmpl=component", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })
	app.get("/about/testimonials/videos/3-videos/detail/19-john?tmpl=component", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("index.php/component/content/article/78-about/19-message.html", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })
	app.get("/images/bhywaiverpdf.pdf", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/images/Gear_Order_Form.pdf", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/public_html_2012/index.php/news/news-videos/8-news-videos/detail/45-seal-team-on-espn.html?tmpl=component", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })
	app.get("/public_html_2012/index.php/testemonials/videos/3-videos/detail/20-johnbarsanti.html?tmpl=component", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })
	app.get("/public_html_2012/index.php/testemonials/videos/3-videos/detail/22-marsha.html?tmpl=component", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })
	app.get("/about/instructors/category/2", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/component/k2/itemlist/category/5-featured", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })
	app.get("/about/instructors/1-seal-top-banner/detail/5-seal", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/about/instructors/6-jennifer-gardner/detail/27-jen1", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/about/instructors/3-videos/detail/25-scott?tmpl=component", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/about/instructors/21-jeff-elgin/detail/59-jeff-elgin?tmpl=component", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/public_html_2012/index.php/testemonials/videos/3-videos/detail/17-heather.html?tmpl=component", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/sealteamptfans/photos/a.79011339403.73676.47579429403/10152746524114404/?type=1", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/sealteamptfans/photos/a.415264589403.190604.47579429403/10152737875689404/?type=1", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/sealteamptfans/photos/a.10152740079344404.1073742174.47579429403/10152740079769404/?type=1", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/sealteamptfans/photos/pcb.10152737889509404/10152737888334404/?type=1", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/sealteamptfans/photos/a.10152747223314404.1073742176.47579429403/10152747223559404/?type=1", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/sealteamptfans/photos/a.415264589403.190604.47579429403/10152744282324404/?type=1", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/sealteamptfans/photos/a.79011339403.73676.47579429403/10152744309809404/?type=1", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/sealteamptfans/photos/a.10152738850179404.1073742173.47579429403/10152738851064404/?type=1", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/public_html_2012/index.php/free-intro-class.html", function(req, res) { res.redirect(301, "http://sealteampt.com/trial"); })
	app.get("/component/k2/item/2-basic_fitness", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); })
	app.get("/about/instructors/category/13-tracy-mcguire", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/about/instructors/category/25-instructors-for-seal-team-physical-training-marsha-hawkins", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/about/instructors/category/27-bailey-wilson", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/about/instructors/category/34-preston-wigner", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("http://www.sealteampt.com/training/trial-workout-days/", function(req, res) { res.redirect(301, "http://sealteampt.com/trial"); })
	app.get("http://www.sealteampt.com/about/instructors/category/26-ashley-nezda", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/public_html_2012/index.php/news/68-please-welcome-our-newest-dc-instructor.html", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })
	app.get("/about/instructors/category/17-jim-driggs", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/about/instructors/category/15-deane-cheatham", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/about/instructors/category/7-mark-gundlach", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/about/instructors/category/33-aaron-zdinak", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/about/instructors/category/5-carol-house", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/about/instructors/category/18-guy-chapman", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/about/instructors/category/31-eleanor-nurney", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/about/instructors/category/38-mitch-jones", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/about/instructors/category/30-graham-gardner", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("about/instructors/category/48-stephen-glover", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/about/instructors/category/16-dan-hickman", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/index.php/contact", function(req, res) { res.redirect(301, "http://sealteampt.com/contact"); })
	app.get("/index.php/about/testimonials", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/images/M_images/newbfcregistrationform.pdf", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/index.php/training/basic-fitness-class", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); })
	app.get("/member-spotlights", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })
	app.get("/basic-fitness-class", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); })
	app.get("/component/k2/item/41-vcu-2012", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })
	app.get("/about/instructors/category/23-nicole-prairie", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/about/instructors/category/46-zach-steinbock", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/about/instructors/category/19-travis-gardner", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/public_html_2012/images/membership/waiver1.pdf", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/index.php/basic-fitness-class?id=60", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); })
	app.get("/about/instructors/category/12-jeanie-trent", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/about/instructors/category/37-john-giese", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/index.php/membership", function(req, res) { res.redirect(301, "http://sealteampt.com/join/register"); })
	app.get("/about/instructors/category/32-jimmy-stanley", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/public_html_2012/index.php/training/seal-pups.html", function(req, res) { res.redirect(301, "http://sealteampt.com/programs/kids"); })
	app.get("/about/instructors/category/21-jeff-elgin", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/about/instructors/category/29-joel-robb", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/training/seal-teens/16-frontpage/80-bfc-register", function(req, res) { res.redirect(301, "http://sealteampt.com/programs/kids"); })
	app.get("/about/instructors/category/14-anne-wilkins", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/about/instructors/category/41-kate-ryan", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); }) 
	app.get("/index.php/about/instructors/category/14-anne-wilkins.html", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/index.php/training/school-athletic-training", function(req, res) { res.redirect(301, "http://sealteampt.com/programs/team-building/athletic"); })
	app.get("/about/instructors/category/44-mark-williams", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/public_html_2012/index.php/about/instructors/7-mark-gundlach/detail/29-markjpg.html?phocaslideshow=1&tmpl=component", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/public_html_2012/index.php/testemonials.html", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/public_html_2012/images/membership/bfcreg.pdf", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/public_html_2012/index.php/member-login.html", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/sealteamptfans/photos/pcb.10153290047664404/10153290045294404/?type=1", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/sealteamptfans/photos/a.10153281983809404.1073742215.47579429403/10153281984434404/?type=1", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/sealteamptfans/photos/a.415264589403.190604.47579429403/10153281614894404/?type=1", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/sealteamptfans/photos/pcb.10153275384624404/10153275382249404/?type=1", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/sealteamptfans/photos/pcb.10153275412904404/10153275411744404/?type=1", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/sealteamptfans/photos/a.415264589403.190604.47579429403/10153275387364404/?type=1", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/sealteamptfans/photos/pcb.10153275412904404/10153275411864404/?type=1", function(req, res) { res.redirect(301, "http://sealteampt.com/"); })
	app.get("/login.html", function(req, res) { res.redirect(301, "/"); })
	app.get("/index.php", function(req, res) { res.redirect(301, "/"); })
	app.get("/index.php/training/seal-teens", function(req, res) { res.redirect(301, "/"); })
	app.get("/dom.webslookup.com", function(req, res) { res.redirect(301, "/"); })
	app.get("/content/view/352", function(req, res) { res.redirect(301, "/"); })
	app.get("/content/view/351", function(req, res) { res.redirect(301, "/"); })
	app.get("/content/view/285", function(req, res) { res.redirect(301, "/"); })
	app.get("/content/view/329", function(req, res) { res.redirect(301, "/"); })
	app.get("/training/corporate-training", function(req, res) { res.redirect(301, "http://sealteampt.com/programs/team-building/corporate"); })
	app.get("/training/gear-advice", function(req, res) { res.redirect(301, "/"); })
	app.get("/index.php?option=com_content&task=view&id=227&Itemid=", function(req, res) { res.redirect(301, "/"); })
	app.get("/index.php/training", function(req, res) { res.redirect(301, "/"); })
	app.get("/index.php/login", function(req, res) { res.redirect(301, "/"); })
	app.get("/index.php/component/content/article?catid=78&id=15", function(req, res) { res.redirect(301, "/"); })
	app.get("/index.php/component/k2/item/34-brooke_page", function(req, res) { res.redirect(301, "/"); })
	app.get("/index.php/about/mission-a-philosophy", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/index.php/basic-fitness-class", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); })
	app.get("/marathon-training", function(req, res) { res.redirect(301, "http://sealteampt.com/programs/team-building/athletic"); })
	app.get("/content/view/93/113/", function(req, res) { res.redirect(301, "/"); })
	app.get("/richmond-weight-loss", function(req, res) { res.redirect(301, "/"); })
	app.get("/index.php/basic-fitness-class?id=60", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); })
	app.get("/index.php/training/gear-advice", function(req, res) { res.redirect(301, "/"); })
	app.get("/pagedetailhd1.asp?sid=22", function(req, res) { res.redirect(301, "/"); })
	app.get("/sealteamptfans/photos/a.415264589403.190604.47579429403/10153270006839404/?type=1", function(req, res) { res.redirect(301, "/"); })
	app.get("/index.php/about/instructors", function(req, res) { res.redirect(301, "/"); })
	app.get("/index.php/component/content/article/16-frontpage/46-22-reasons-to-love-richmond", function(req, res) { res.redirect(301, "/"); })
	app.get("/component/content/category/16-frontpage", function(req, res) { res.redirect(301, "/"); })
	app.get("/profile.php?id=139741052717953", function(req, res) { res.redirect(301, "/"); })
	app.get("/profile.php?id=271894716168973", function(req, res) { res.redirect(301, "/"); })
	app.get("/component/mailto/?tmpl=component&template=clublifextc&link=323c5602543c4e668ccfaa8204005fb92dc4168f", function(req, res) { res.redirect(301, "/"); })
	app.get("/sealteamptfans/photos/a.10153281983809404.1073742215.47579429403/10153281984104404/?type=1", function(req, res) { res.redirect(301, "/"); })
	app.get("/sealteamptfans/photos/a.10153278332639404.1073742214.47579429403/10153278332739404/?type=1", function(req, res) { res.redirect(301, "/"); })
	app.get("/index.php/component/content/article/86-members-news-flash/33-90day-challenge.html", function(req, res) { res.redirect(301, "/"); })
	app.get("/about/instructors/category/13-tracy-mcguiretracy", function(req, res) { res.redirect(301, "/"); })
	app.get("/index.php/about/instructors/category/7-mark-gundlach.html", function(req, res) { res.redirect(301, "/"); })
	app.get("/sealteamptfans/photos/a.415264589403.190604.47579429403/10153263162504404/?type=1", function(req, res) { res.redirect(301, "/"); })
	app.get("/sealteamptfans/photos/pcb.10153275412904404/10153275411769404/?type=1", function(req, res) { res.redirect(301, "/"); })
	app.get("/sealteamptfans/photos/pcb.10153275384624404/10153275382894404/?type=1", function(req, res) { res.redirect(301, "/"); })
	app.get("/sealteamptfans/photos/pcb.10153284630834404/10153284619574404/?type=1", function(req, res) { res.redirect(301, "/"); })
	app.get("/sealteamptfans/photos/a.10153278332639404.1073742214.47579429403/10153278332929404/?type=1", function(req, res) { res.redirect(301, "/"); })
	app.get("/wp-content/plugins/vipers-video-quicktags/resources/jw-flv-player/player.swf?file=http%3A%2F%2Fsealteamfitness.com%2Fwp-content%2Fuploads%2F2009%2F06%2FSTPT_Hardy.flv", function(req, res) { res.redirect(301, "/"); })
	app.get("/sealteamptfans/photos/a.10153278332639404.1073742214.47579429403/10153278333249404/?type=1", function(req, res) { res.redirect(301, "/"); })
	app.get("/sealteamptfans/photos/pcb.10153290047664404/10153290045389404/?type=1", function(req, res) { res.redirect(301, "/"); })
	app.get("/index.php/news/45-seal-team-pt-receives-2008-best-of-richmond-award", function(req, res) { res.redirect(301, "/"); })
	app.get("/index.php/component/content/article?catid=78&amp;id=15", function(req, res) { res.redirect(301, "/"); })
	app.get("/public_html_2012/index.php/news.html", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })
	app.get("/public_html_2012/index.php/about/instructors/category/20-scott-donald.html", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })
	app.get("/public_html_2012/index.php/about/instructors/category/21-jeff-elgin.html", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })
	app.get("/programs/motivational-speaking", function(req, res) { res.redirect(301, "http://navysealjohnmcguire.com"); })
	app.get("/index.php/about/john-s-message", function(req, res) { res.redirect(301, "http://sealteampt.com/about"); })
	app.get("/index.php/training/corporate-training", function(req, res) { res.redirect(301, "http://sealteampt.com/programs/team-building/corporate"); })
	app.get("/90daynutritionchallenge", function(req, res) { res.redirect(301, "/"); })
	app.get("/register", function(req, res) { res.redirect(301, "http://sealteampt.com/join/register"); })
	app.get("/home", function(req, res) { res.redirect(301, "/"); })
	app.get("/content/view/284", function(req, res) { res.redirect(301, "/"); })
	app.get("/content/view/354", function(req, res) { res.redirect(301, "/"); })
	app.get("/component/k2/item/15-stpt_si", function(req, res) { res.redirect(301, "/"); })
	app.get("/index.php/about/testemonials/videos", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); })
	app.get("/index.php/member-login.html", function(req, res) { res.redirect(301, "/"); })
	app.get("/index.php/news.html", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })
	app.get("/pagedetailhd1.asp?sid=22", function(req, res) { res.redirect(301, "/"); })
	app.get("/index.php/news/news-videos/8-news-videos/detail/34-remembering-our-fallen-cbs-6-richmond-12-aug-2011.html?tmpl=component", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })
	app.get("/component/content/article?catid=78&id=19:message", function(req, res) { res.redirect(301, "/"); })
    app.get("/index.php/news/news-videos/8-news-videos/detail/35-brooke-page-loses-130-pounds-interview-10-may-2011.html?tmpl=component", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })
	app.get("/index.php/about/instructors/18-guy-chapman/detail/56-guy-chapman?tmpl=component", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); })
	app.get("/about/instructors/category/2-seal-team-physical-training-instructors", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); })
	app.get("/index.php/basic-fitness-class.html", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); })
	app.get("/index.php/component/content/article?id=60", function(req, res) { res.redirect(301, "/"); })
	app.get("/index.php/about/instructors/category/6-jennifer-gardner", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); })
	app.get("/%E2%80%A6news/69-seal-movie-26-feb-2012.html", function(req, res) { res.redirect(301, "/"); })
	app.get("/about/instructors/category/52-brian-roy", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); })
	app.get("/index.php/component/k2/item/35-navy-seal-charities", function(req, res) { res.redirect(301, "/"); })
	app.get("/about/instructors/category/48-stephen-glover", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); })	
	app.get("/index.php/component/k2/item/42-seal-team-hq", function(req, res) { res.redirect(301, "/"); })	
	app.get("/component/option,com_directory/page,byletter/alpha,t/Itemid,74/", function(req, res) { res.redirect(301, "/"); })	
	app.get("/component/option,com_extcalendar/Itemid,48/extmode,flyer/date,2032-01-01/", function(req, res) { res.redirect(301, "/"); })	
	app.get("/component/k2/itemlist/user/index.php?option=com_content&view=article&id=4:basic-fitness-class&catid=16:frontpage&Itemid=503", function(req, res) { res.redirect(301, "/"); })	
	app.get("/component/content/article/20-mobile/49-faq-mobile", function(req, res) { res.redirect(301, "/"); })	
	app.get("/index.php/component/k2/itemlist/category/6-products", function(req, res) { res.redirect(301, "/"); })	
	app.get("/component/content/category/index.php?option=com_content&view=article&id=60", function(req, res) { res.redirect(301, "/"); })	
	app.get("/index.php/news/media-video/8-news-videos/detail/33-navy-seal-john-mcguire-on-cnn-john-king-show-3-may-2011?phocaslideshow=1&tmpl=component", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })	
	app.get("/index.php/news/53-john-mcguire-featured-on-cnn-about-the-seal-rescue-in-somalia.html", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })	
	app.get("/index.php/component/k2/item/1-to-become-a-seal", function(req, res) { res.redirect(301, "/"); })	
	app.get("/content/view/333", function(req, res) { res.redirect(301, "/"); })	
	app.get("index.php/component/k2/item/41-vcu-advances-stpt-cbs6", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })	
	app.get("/index.php/news/16-frontpage/38-instructor-minas-kourouglos", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })	
	app.get("/index.php/component/k2/item/14-john_cnn", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })	
	app.get("/index.php/component/k2/item/3-stpt-vcu", function(req, res) { res.redirect(301, "http://sealteampt.com/news"); })	
	app.get("/index.php/news/22-2011-winter-incentive-program.html", function(req, res) { res.redirect(301, "/"); })	
	app.get("/index.php/about/instructors/category/15-deane-cheatham", function(req, res) { res.redirect(301, "http://sealteampt.com/join"); })
	app.get("/programs/contact-kids-program", function(req, res) { res.redirect(301, "//sealteampt.com/join"); })
	app.get("/programs/kids", function(req, res) { res.redirect(301, "//sealteampt.com/join"); })
	// Views
	app.get('/', routes.views.index);

	app.get('/news/:category?', routes.views.blog);
	app.get('/news/post/:post', routes.views.post);

	app.all('/contact', routes.views.contact);

	app.get("/about", staticPage("about"));
	app.get("/join", staticPage("join"));
	app.all("/trial", routes.views.trial);

	// programs:
	app.get("/programs/team-building/corporate", staticPage("programs/corporate"));
	app.get("/programs/team-building/athletic", staticPage("programs/athletic"));
	app.get("/programs/motivational-speaking", staticPage("programs/motivational-speaking"));
	app.get("/programs/kids", staticPage("programs/kids"));
	app.all("/programs/contact-speaker", routes.views["contact-special"].call(this, "programs/contact-speaker"));
	app.all("/programs/contact-corporate-training", routes.views["contact-special"].call(this, "programs/contact-corporate-training"));
	app.all("/programs/contact-athletic-training", routes.views["contact-teams"].call(this, "programs/contact-athletic-training"));
	app.all("/programs/contact-kids-program", routes.views["contact-kids"].call(this, "programs/contact-kids-program"));

	app.get("/old-path", function(req, res) { res.redirect(301, "http://sealteampt.com/new-path"); }); 
	
	
	app.all("/join/register", routes.views.registration);
	app.get("/join/agreement/:id", routes.views.agreement);

	app.get("/faqs", staticPage("faqs"));

	app.get("/api/twitter", routes.api.twitter);
	//app.post("/api/newsletter/subscribe", routes.views.newsletter);//
	
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
	
};
var keystone = require('keystone'),
  async = require('async');

var twitter = [
  'trhYKua8xfCSEclmQP97uK0DR',
  'rZAqnaOCD7wpxovTSPY8j3ncO5UzYmbyOIET4NA3Awx2BVnSB3',
  '538862502-eHsFHAdzpOoW7K2HeWSsND08cxR0zvoOOSr7gvYf',
  'kGsdaFgEfBHeLwiHmT499y5z1fpwvRJgDdqNirdC8G5U8'
];

var Twitter = require('node-twitter');
var twitterRest = new Twitter.RestClient(twitter[0], twitter[1], twitter[2], twitter[3]);
var twitterSearch = new Twitter.SearchClient(twitter[0], twitter[1], twitter[2], twitter[3]);

exports = module.exports = function(req, res) {
  var method = null;
  var params = null;

  switch(req.param("url")) {
    case "timeline":
      method = twitterRest.statusesUserTimeline;
      params = { count: parseInt(req.param("count")), include_rts: req.param("include_rts") == "true", exclude_replies: req.param("exclude_replies") == "true", include_entities: req.param("include_entities")=="true", 'screen_name': req.param("screen_name") };
      break;
    case "search":
      method = twitterSearch.search;
      params = { q: req.params("q"), count: parseInt(req.params("count")), include_rts: req.params("include_rts") == "true" }; 
    default:
      method = twitterRest.statusesHomeTimeline;
      params = { count: 20 };
      break;
  }

  method.call(twitterRest, params, function(error, result) {
    if(error) { res.writeHead(500); console.log(error, result); }

    res.send(result);
  });
};

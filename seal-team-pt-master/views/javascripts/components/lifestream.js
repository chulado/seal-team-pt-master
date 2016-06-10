export default function() {
  $('#social-stream').dcSocialStream({
    feeds: {
      twitter: {
        id: 'sealteampt',
        url: "/api/twitter",
        images: "medium"
      },
      facebook: {
        id: '47579429403',
        out: "intro,title,text,share",
        text: "content"
      }
    },
    rotate: {
      delay: 0
    },
    wall: true,
    max: "limit",
    controls: false,
    filter: false,
    height: "auto"
  });

  // fix links
  $("#social-stream").on("click", function(e) {
    var a = null;
    if($(e.target).is("a")) a = $(e.target);
    if($(e.target).parents("a").length > 0) a = $(e.target).parents("a");

    if(a && a.length && a.length > 0 && a.attr("href") && a.attr("href")[0] == "/" & a.attr("href")[1] != "/") {
      var li = a.parents(".dcsns-li");
      if(!li) return true;
      var url = "";

      // facebook
      if(li.hasClass("dcsns-facebook")) url = "//facebook.com";
      if(li.hasClass("dcsns-twitter")) url = "//twitter.com"; 
      window.a = a;

      a.attr("href", url + a.attr("href"));
      e.preventDefault();
      console.log(a.attr("href"));
      a[0].click();
      return false;

    } else {
      return true;
    }    
  });
}
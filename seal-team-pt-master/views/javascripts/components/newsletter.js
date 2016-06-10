export default function() {
  $("#newsletter-subscribe").on("submit", function(e){
    e.preventDefault();
    var prevText = $("#newsletter-subscribe button").text();
    if(!$("#newsletter-subscribe input").val()) return;

    $("#newsletter-subscribe button").text("Loading...");
    $.post("/api/newsletter/subscribe", { email: $("#newsletter-subscribe input").val() }).then(function(){
      $("#newsletter-subscribe").html("<b>Thanks!</b>  You have been subscribed to our newsletter.");
    }, function() {
      alert("There was an error subscribing to our newsletter. Please check your email and try again.")
      $("#newsletter-subscribe button").text(prevText);
    });
  });
}
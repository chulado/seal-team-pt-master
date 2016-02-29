export default function() {
  $(".carousel").each(function() {
    var $this = $(this);
    $this.owlCarousel({
      items: parseInt($this.attr("data-items"))     || 5,
      loop: $this.attr("data-loop")=="true"         || false,
      nav: $this.attr("data-nav")=="true"           || false,
      dots: $this.attr("data-dots")=="false"         || false,
      autoplay: $this.attr("data-autoplay")=="true" || true 
    });
  });
}
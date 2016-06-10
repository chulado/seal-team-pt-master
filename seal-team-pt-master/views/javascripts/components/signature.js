export default function() {
  var $canvas = $(".signature-area canvas");
  var $form = $canvas.parents("form");

  function resizeCanvas() {
    var ratio =  window.devicePixelRatio || 1;
    $canvas[0].width = $canvas[0].offsetWidth * ratio;
    $canvas[0].height = $canvas[0].offsetHeight * ratio;
    $canvas[0].getContext("2d").scale(ratio, ratio);
  }


  if($canvas.length > 0 && $form.length > 0){
    window.onresize = resizeCanvas;
    resizeCanvas();

    var signaturePad = new SignaturePad($canvas[0]);

    $(".clear-signature").on("click", function (event) {
        signaturePad.clear();
    });

    $form.on("submit", function(e) {
      if (signaturePad.isEmpty()) {
        e.preventDefault();
        alert("Please provide your signature first.");
      } else {
        $form.find("input[name=signature]").val(signaturePad.toDataURL());
      }
    });
  }
}
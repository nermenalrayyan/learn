/* Global $, Alert, console */

// Links Add Active Class

$('.links li').click (function() {
     
    $(this).addClass('active').siblings().removeClass('active')

});


// Trigger The Bx Slider

 /* $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  }); */
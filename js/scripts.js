$(document).ready(function(){
  $("#top_menu").click(function(){
    $("#top_menu_content").toggleClass("open");
    $("#top_menu_button").toggleClass("open");
  })
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
      0:{items:1},
      600:{items:4},
      1000:{items:4}
    }
  })
  $(".h2_one_fifth h2").click(function(){
    $(".h2_one_fifth h2").removeClass("on")
    $(this).addClass("on");
  })
});

$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 80) {
      $(".header").addClass("sabit-header");
      $(".nav-a").addClass("nav-a-sabit");
      $(".nav-li").addClass("nav-li-new");
    } 
    else {
      $(".header").removeClass("sabit-header");
      $(".nav-a").removeClass("nav-a-sabit");
      $(".nav-li").removeClass("nav-li-new");
    }
  });
});

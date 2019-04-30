$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 80) {
      $(".header").addClass("sabit-header");
      $(".nav-a").addClass("nav-a-sabit");
      $(".nav-li").addClass("nav-li-new");
    } else {
      $(".header").removeClass("sabit-header");
      $(".nav-a").removeClass("nav-a-sabit");
      $(".nav-li").removeClass("nav-li-new");
    }
  });
});
function msgcontrol() {
  var cdnumber = document.getElementById("cardnumber").value;
  var uzunluk = cdnumber.length;
  var cdowner = document.getElementById("cardowner").value;
  var cdexpiry = document.getElementById("cardexpiry").value;
  var cdcvc = document.getElementById("cardcvc").value;
  if (
    uzunluk !== 19 ||
    cdowner.indexOf(" ") == -1 ||
    cdexpiry.length !== 7 ||
    cdcvc.length !== 3
  )
    alert("Kredi kartı bilgisi doğru değil!");
  else alert("Satın alma başarılı");
}

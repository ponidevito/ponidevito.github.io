$(document).ready(function () {
  let burgerMenu = $(".menu__icon");
  console.log(burgerMenu);
  burgerMenu.on("click", function () {
    $(".menu__icon").toggleClass("_active");
    $("body").toggleClass("_lock");
    $(".menu__body").toggleClass("_active");
  });



  $(".slider").slick({
    arrows:false,
    dots:true,
    adaptiveHeight:true
    // centerMode:true,
    

});
});



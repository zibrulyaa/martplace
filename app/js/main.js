$(function () {
  $(".slider__inner").slick({
    arrows: false,
    autoplay: 5000,
  });
  $(".rateyo").rateYo({
    rating: 5,
    starWidth: "15px",
    readOnly: true,
  });
  $(".product-slider__inner").slick({
    slidesToScroll: 1,
    slidesToShow: 1,
  });
  $(".followers-slider__inner").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  });
  var mixer = mixitup(".mix__products-inner");
});
$(".js-range-slider").ionRangeSlider({
  type: "double",
  min: 0,
  max: 320,
  from: 30,
  to: 300,
  prefix: "$",
});
$(".filterbar__list").on("click", function () {
  $(".filterbar__list").addClass("active");
  $(".filterbar__grid").removeClass("active");
  $(".products__items").addClass("list");
});
$(".filterbar__grid").on("click", function () {
  $(".filterbar__list").removeClass("active");
  $(".filterbar__grid").addClass("active");
  $(".products__items").removeClass("list");
});

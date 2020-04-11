$(function(){
    $('.slider__inner').slick({
        arrows: false,
        autoplay: 5000
    });
    $('.rateyo').rateYo({
        rating: 5,
        starWidth: '15px',
        readOnly: true
    });
    $('.product-slider__inner').slick({
        slidesToScroll:1,
        slidesToShow: 1
    });
})
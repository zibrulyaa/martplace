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
    $('.followers-slider__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true
    });
    var mixer = mixitup('.mix__products-inner');
})
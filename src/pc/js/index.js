import CONST from './_const.js';
if(CONST.BREAK_POINT < CONST.$window.width()){
    $('#js-hero-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: true,
        centerMode: true,
        variableWidth: true
    });
} else {
    $('#js-hero-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: false,
        nextArrow: false
    });
}
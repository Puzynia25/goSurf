$(function () {
    $(".header__slider").slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="images/arrows-left.svg" alt=""/>',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="images/arrows-right.svg" alt=""/>',
        asNavFor: ".slider-dots",
    });
    $(".slider-dots").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: ".header__slider",
    });
});

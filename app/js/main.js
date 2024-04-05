$(function () {
    $(".header__slider").slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="images/arrows-left.svg" alt=""/>',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="images/arrows-right.svg" alt=""/>',
        asNavFor: ".slider-dotshead",
    });
    $(".slider-dotshead").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: ".header__slider",
    });
    $(".surf-slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="images/arrows-left.svg" alt=""/>',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="images/arrows-right.svg" alt=""/>',
        asNavFor: ".slider-map",
    });
    $(".slider-map").slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: ".surf-slider",
        focusOnSelect: true,
    });
});

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
    $(".holder__slider, .shop__slider").slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="images/arrows-left.svg" alt=""/>',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="images/arrows-right.svg" alt=""/>',
    });

    $(
        '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt="plus"></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt="minus"></div></div>'
    ).insertAfter(".quantity input");
    $(".quantity").each(function () {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find(".quantity-up"),
            btnDown = spinner.find(".quantity-down"),
            min = input.attr("min"),
            max = input.attr("max");

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });

    $(".quantity-button").on("click", function () {
        var parents = $(this).parents(".holder-slider__info");
        let sum = $(".sum", parents).data("nights") * $(".nights", parents).val() + $(".sum", parents).data("guests") * ($(".guests", parents).val() - 1) - 1;
        $(".sum", parents).html("$" + sum);
    });

    //рассчет суммы с исходными значениями
    $(".quantity").each(function () {
        var parents = $(this).parents(".holder-slider__info");
        let sum = $(".sum", parents).data("nights") * $(".nights", parents).val() + $(".sum", parents).data("guests") * ($(".guests", parents).val() - 1) - 1;
        $(".sum", parents).html("$ " + sum);
    });

    $(".surfboard-box__circle").on("click", function () {
        $(this).toggleClass("active");
    });
});

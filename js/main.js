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
        responsive: [
            {
                breakpoint: 961,
                settings: "unslick",
            },
        ],
    });
    $(".surf-slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="images/arrows-left.svg" alt=""/>',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="images/arrows-right.svg" alt=""/>',
        asNavFor: ".slider-map",
        responsive: [
            {
                breakpoint: 1210,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                },
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    });
    $(".slider-map").slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: ".surf-slider",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1103,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                },
            },
        ],
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
        let sum =
            $(".sum", parents).data("nights") * $(".nights", parents).val() +
            $(".sum", parents).data("guests") * ($(".guests", parents).val() - 1) -
            1;
        $(".sum", parents).html("$" + sum);
    });

    //рассчет суммы с исходными значениями
    $(".quantity").each(function () {
        var parents = $(this).parents(".holder-slider__info");
        let sum =
            $(".sum", parents).data("nights") * $(".nights", parents).val() +
            $(".sum", parents).data("guests") * ($(".guests", parents).val() - 1) -
            1;
        $(".sum", parents).html("$ " + sum);
    });

    $(".surfboard-box__circle").on("click", function () {
        $(this).toggleClass("active");
    });

    //меню выезжает при клике на кнопку в моб версии
    $(".menu-btn").on("click", function () {
        $(".menu").toggleClass("active");
    });

    new WOW().init();
});

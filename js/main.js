$(document).ready(function () {
    $(".menu-item a").on("click touchend", function () {
        $(".menu-item a").removeClass("active");
        $(this).addClass("active");
    });

    function setBackgroundPosition() {
        $(".header-container").css({
            'background-position-y': -(Math.max(document.body.scrollTop, document.documentElement.scrollTop) / 8) + "px"
        });
    }

    $(window).on("scroll", function () {
        setBackgroundPosition();
    })

    $(".scroll-down-button").on("click touchend", function () {
        $("html,body").animate({
            scrollTop: $("#first-main").offset().top - 100
        }, 600);
    });
});
$(function() {

    $('.burger').click(function(event) {
        $('.burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.menu__list').click(function(event) {
        $('.burger, .menu').removeClass('active');
        $('body').removeClass('lock');
    });


    $("[data-scroll").on("click", function(event) {
        event.preventDefault();
        let scrollEl = $(this).data('scroll');
        let scrollElPos = $(scrollEl).offset().top;

        $("html, body").animate({
            scrollTop: scrollElPos
        }, 500)
    });
    var mixer = mixitup('.portfolio__content')
});
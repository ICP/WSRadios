$(function () {
    $("[data-toggle]").on('click', function (e) {
        var $target = $($(this).attr('data-target'));
        $(this).toggleClass('active');
        switch ($(this).attr('data-toggle')) {
            case 'toggle':
                if ($target.is(":hidden"))
                    $target.slideDown();
                else
                    $target.slideUp();
                break;
            case 'toggle-class':
                $target.toggleClass('active');
                break;
        }
        e.preventDefault();
    });

    var $search = $(".search");
    $search.on('focusin', "input", function () {
        $search.addClass('open');
    }).on('focusout', "input", function () {
        $search.removeClass('open');
    });

    $("body._sm, body._xs").on('click', ".search", function (e) {
        if (e.target !== this)
            return;
        $(".search").removeClass('active');
    });

    if ($(".panel.slider").length) {
        var $slider = $(".panel.slider");
        var rtl = $("body").hasClass("rtl") ? true : false;
        $.each($slider, function () {
            var $this = $(this);
            var slider = $this.find(".items ul").owlCarousel({
                loop: true
                , rtl: rtl
                , items: 4
                , margin: 0
                , autoPlay: false
                , responsive: {
                    0: {items: 2}
                    , 480: {items: 2}
                    , 720: {items: 4}
                }
            });
            $this.find(".pager .next").click(function (e) {
                slider.trigger('next.owl.carousel');
                e.preventDefault();
            });
            $this.find(".pager .prev").click(function (e) {
                slider.trigger('prev.owl.carousel');
                e.preventDefault();
            });
        });
    }
    $("#menu ul li.haschild").on('click', function (e) {
        if ($("body").hasClass("_xs") || $("body").hasClass("_sm")) {
            $(this).toggleClass('active');
            e.preventDefault();
        }
    });

});
function responsive_resize() {
    var current_width = $(window).width();
    if (current_width < 768) {
        // XS
        $('body').addClass("_xs").removeClass("_sm _md _lg");
    } else if (current_width > 767 && current_width < 992) {
        $('body').addClass("_sm").removeClass("_xs _md _lg");
    } else if (current_width > 991 && current_width < 1200) {
        $('body').addClass("_md").removeClass("_xs _sm _lg");
    } else if (current_width > 1199) {
        $('body').addClass("_lg").removeClass("_xs _sm _md");
    }
}
responsive_resize();
$(window).resize(function () { // Change width value on user resize, after DOM
    responsive_resize();
});
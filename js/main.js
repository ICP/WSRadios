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
        }
        e.preventDefault();
    });
    
    var $search = $(".search");
    $(".toggle-search").on('click', function(e) {
        $search.toggleClass('open').promise().done(function(){
            $search.find("input").focus();
        });
       e.preventDefault(); 
    });
    $search.on('focusout', "input", function () {
        $search.toggleClass('open');
    });

    if ($(".panel.slider").length) {
        var $slider = $(".panel.slider");
        $.each($slider, function () {
            var $this = $(this);
            var slider = $this.find(".items ul").owlCarousel({
                loop: true
                , items: 4
                , margin: 0
                , autoplay: false
                , responsive: {
                    0: {items: 2}
                    , 480: {items: 4}
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
});
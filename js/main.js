$(function () {
    $(".lang-select").on('click', function (e) {
	if ($("#languages").is(':visible'))
	    $("#languages").slideUp();
	else
	    $("#languages").slideDown(function () {
		$("html, body").animate({scrollTop: $("#languages").offset().top});
	    });
	e.preventDefault();
    });

    if ($(".panel.slider").length) {
	var $slider = $(".panel.slider");
	$.each($slider, function() {
	    var $this = $(this);
	    var slider = $this.find(".items ul").owlCarousel({
		loop: true
		, items: 4
		, margin: 0
		, autoplay: false
//		, animateOut:"slideOutDown"
//		, animateIn:"flipInX"
		, responsive: {
		    1000: { items: 4 }
		}
	    });
	    $this.find(".pager .next").click(function(e) {
//		console.log(slider);
		slider.trigger('next.owl.carousel');
		e.preventDefault();
	    });
	    $this.find(".pager .prev").click(function(e) {
		slider.trigger('prev.owl.carousel');
		e.preventDefault();
	    });
	});
    }
});
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
    
    
});
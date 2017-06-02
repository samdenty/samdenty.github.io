/* Load footer & header dynamically */
	$("footer").load("../res/footer.html");
/* Start onevent listeners */
	$(document).ready(function() {
	    $(".button-collapse").sideNav();
	    if ($(window).width() > 993) {
		    $(window).on('scroll', function() {
		        if ($(window).scrollTop() + $(window).height() > $('.main-wrap').outerHeight()) {
		            $('body').addClass('tight');
		            $('.side-nav').addClass('dn');
		        } else {
		            $('body').removeClass('tight');
		            setTimeout("$('.side-nav').removeClass('dn');", 500);
		        }
		    });
		    $("html").on("click", "body.tight .main-wrap", function() {
		        $('html, body').animate({
		            scrollTop: $('.main-wrap').outerHeight() - $(window).height()
		        }, 500);
		    });
		}
		$('.parallax').parallax();
	})
/* Enable the header transparency effect */
	var header = $("nav");
	if (($(window).width() > 993) && (!$("body").hasClass("no-header"))) {
	    $(window).scroll(function() {
	        setTimeout('header.addClass("transition");', 100);
	        var scroll = $(window).scrollTop();
	        if (scroll >= 50) {
	            header.addClass("block");
	        } else {
	            header.removeClass("block");
	        }
	    });
	};

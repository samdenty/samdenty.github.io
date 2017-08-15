/* Start onevent listeners */
	$(document).ready(function() {
	    $(".button-collapse").sideNav();
	    if ($(window).width() > 993) {
	        $(window).on('scroll', function() { checkScroll() });
	        $("html").on("click", "body.tight .main-wrap", function() {
	            $('html, body').animate({
	                scrollTop: $('.main-wrap').outerHeight() - $(window).height()
	            }, 500);
	        });
	        checkScroll();
	    }
	    $('.parallax').parallax();
	})
	function checkScroll() {
	    if ($(window).scrollTop() + $(window).height() > $('.main-wrap').outerHeight() + 60) {
	        $('body').addClass('tight');
	        $('.side-nav').addClass('dn');
	    } else {
	        $('body').removeClass('tight');
	        setTimeout("$('.side-nav').removeClass('dn');", 500);
	    }
	}
/* Enable the header transparency effect */
	var header = $("nav");
	if (!$("body").hasClass("no-header")) {
	    $(window).scroll(function() {
	        setTimeout('header.addClass("transition");', 100);
	        var scroll = $(window).scrollTop();
	        if (scroll >= 15) {
	            header.addClass("block");
	        } else {
	            header.removeClass("block");
	        }
	    });
	};
/* Initiate contact popup */
	$(document).ready(function() {
	    $('.modal').modal();
	    $('.carousel').carousel();
	});
/* Custom search dialog */
	var query = document.getElementById("searchQuery");
	function submitSearch() {
	    window.location = "search?" + query.value;
	}
	function prepareSearch() {
	    setTimeout(function() { query.focus(); }, 200);
	    query.onkeypress = function(e) {
	        var event = e || window.event;
	        var charCode = event.which || event.keyCode;

	        if (charCode == '13') {
	            submitSearch();
	            return false;
	        }
	    }
	}
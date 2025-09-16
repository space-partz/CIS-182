$(document).ready(function() {
	// setting up the click event handler for the h2 elements
	$("#faqs h2").toggle(
		function() {
			$(this).toggleClass("minus");
		    $(this).next().slideDown(1000);
	    },
	    function() {
	        $(this).toggleClass("minus");
	        $(this).next().slideUp(1000);
	    }
    ); // end toggle   
}); // end ready

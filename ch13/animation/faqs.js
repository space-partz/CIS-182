$(document).ready(function() {
	$("#faqs h1").animate(
			{ fontSize: "650%", opacity: 1, left: "+=275" }, 2000 )  
		.animate(
			{ fontSize: "175%", left: "-=275", }, 1000 );
	
	$("#faqs h2").toggle(
		function() {
			$(this).toggleClass("minus");
		    $(this).next().slideDown(500);
	    },
	    function() {
	        $(this).toggleClass("minus");
	        $(this).next().slideUp(1500);
	    }
    ); // end toggle
});  // end ready

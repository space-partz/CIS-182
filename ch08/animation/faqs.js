$(document).ready(function() {
	
	// runs when an h2 heading is clicked
	$("#faqs h2").toggle(
		function() {
			$(this).toggleClass("minus");
		    $(this).next().show(2000);
	    },
	    function() {
	        $(this).toggleClass("minus");
	        $(this).next().hide(2000);
	    }
    ); // end toggle
    
    // runs when the page is ready
    $("#faqs h1").animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 1000 )  
		         .animate( { fontSize: "175%", left: "-=200" }, 1000 );
		    
	// runs when the top-level heading is clicked
	$("#faqs h1").click(function() {
		$(this).animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 2000 )  
			   .animate( { fontSize: "175%", left: "-=200" }, 1000 );
	}); // end click
    
}); // end ready

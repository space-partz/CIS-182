var $ = function (id) {
	return document.getElementById(id);
}
window.onload = function () {
    var faqs = $("faqs");
    var h2_elements = faqs.getElementsByTagName("h2");
    		    
    var headingNode;
    for (var i = 0; i < h2_elements.length; i++ ) {
    	headingNode = h2_elements[i];
    	
    	// Attach event handler
    	headingNode.onclick = function () {
			var h2 = this;         // h2 is the current headingNode object
			if (h2.hasAttribute("class")) {
				h2.removeAttribute("class");	
			}
			else {
				h2.setAttribute("class", "minus");
			}
			if (h2.nextElementSibling.hasAttribute("class")) {
				h2.nextElementSibling.removeAttribute("class");
			}
			else {
				h2.nextElementSibling.setAttribute("class", "open");
			}
		}
    }
    $("first_link").focus();
     
    // Create a one-time timer that hides the startup message after 5 seconds
    var timer1 = setTimeout( 
    	function () {
    		$("startup_message").setAttribute("class", "closed");
    		clearTimeout(timer1);
    	},
    	5000 );
    
    // Create an interval timer that updates a counter
    var counter = 0;
    var timer2 = setInterval( 
    	function () {
 		   counter++;
    		document.getElementById("counter").firstChild.nodeValue = counter;
		}, 
    	1000 );
    
    // Using global variables for these timers
    /*
    // Set up one-time timer
    timer1 = setTimeout( hideMessage, 5000);
    // Set up interval timer
    timer2 = setInterval( updateCounter, 1000 );
    */
}
/*    
var counter = 0;
var hideMessage = function () {
    $("startup_message").setAttribute("class", "closed");
    clearTimeout(timer1);
var updateCounter = function () {
    counter++;
    document.getElementById("counter").firstChild.nodeValue = counter;
}
*/

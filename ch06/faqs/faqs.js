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
}
var $ = function (id) {
	return document.getElementById(id);
}
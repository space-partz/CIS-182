var $ = function (id) { 
	return document.getElementById(id); 
}
window.onload = function () {
    var listNode = $("image_list");
    var captionNode = $("caption");
    var imageNode = $("image");
    
    var imageLinks = listNode.getElementsByTagName("a");
    
    // Process image links
    var i, node, image;
    var imageCache = [];
    for ( i = 0; i < imageLinks.length; i++ ) {
        node = imageLinks[i];

        // Attach event handler
        node.onclick = function (evt) {
            var link = this;          // link is the linkNode
            imageNode.src = link.href;
    		captionNode.firstChild.nodeValue = link.title;
    
	    	// Cancel the default action of the event
	    	if (!evt) { evt = window.event; }
		    if ( evt.preventDefault ) {
		        evt.preventDefault();          // DOM compliant code
		    }
		    else {
		        evt.returnValue = false;
		    }
		}
        // Preload image
        image = new Image();
        image.src = node.href;
        imageCache.push( image );
    }
    $("first_link").focus();
}

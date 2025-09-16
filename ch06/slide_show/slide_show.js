var $ = function (id) { 
	return document.getElementById(id); 
}
window.onload = function () {
    var listNode = $("image_list");    
    var captionNode = $("caption");
    var imageNode = $("image");
        
    var links = listNode.getElementsByTagName("a");
    
    // Process image links
    var i, node, image;
    var imageCache = [];
    for ( i = 0; i < links.length; i++ ) {
        linkNode = links[i];

        // Preload image and copy title properties
        image = new Image();
        image.src = linkNode.href;
        image.title = linkNode.title;
        imageCache.push( image );
    }

    // Start slide show
    var imageCounter = 0;
    var  timer = setInterval(
        function () { 
		    imageCounter = ++imageCounter % imageCache.length;
		    image = imageCache[imageCounter];
		    imageNode.src = image.src;
		    captionNode.firstChild.nodeValue = image.title;
        },
        2000);
}

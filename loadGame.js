
// Fills the game area with bubble images
function loadGame()
{
    // Get the game area
    var wrap = document.getElementById('wrap');
 
    // Assume the bubble image dimensions and area dimensions
    var imgWidth = 80;
    var imgHeight = 80;
    var rows = 3;
    var cols = 8;
 
    // Fill the game area creating img elements with onclick attribute set
    for ( var i = 0; i < rows; ++i )
    {
        for ( var j = 0; j < cols; ++j )
        {
            // Create the image as a new node
            var img = document.createElement('img');
            img.src = 'blue.png';
			img.setAttribute("height",imgHeight);
            img.setAttribute("width",imgWidth);
            // Position the image, CSS must specify 'position:absolute' for img
            img.style.top = (i * imgHeight) + 'px';
            img.style.left = (j * imgWidth) + 'px';
 
            // When user clicks this image, replace it for a popped image
            //img.onclick = popBubble;
 
            // Insert the new image as child of the game area
            wrap.appendChild(img);
        }
    }
}

function getOffset(el) {
  el = el.getBoundingClientRect();
  
  return {
    left: el.left + window.scrollX,
    top: el.top + window.scrollY,
	height: el.height,
	width: el.width
  }
}
 var imgWidth = 80;
function createBoard( ){
	var wrap = document.getElementById('wrap');
 
    // Assume the bubble image dimensions and area dimensions
    var imgWidth = 80;
    var imgHeight = 80;
    var rows = 3;
    var cols = 8;
	var dimensions = getOffset(document.getElementById("wrap"));
	for (var i = 0; i < cols; i++){
		 var img = document.createElement('img');
            img.src = 'blue.png';
			img.setAttribute("height",imgHeight);
            img.setAttribute("width",imgWidth);
			img.style.top = (i * imgHeight) + 'px';
            img.style.left = (dimensions.left) + 'px';
			wrap.appendChild(img);
			var img = document.createElement('img');
            img.src = 'blue.png';
			img.setAttribute("height",imgHeight);
            img.setAttribute("width",imgWidth);
			img.style.top = (i * imgHeight) + 'px';
            img.style.left = (dimensions.left+dimensions.width) + 'px';
			wrap.appendChild(img);
			var img = document.createElement('img');
            img.src = 'blue.png';
			img.setAttribute("height",imgHeight);
            img.setAttribute("width",imgWidth);
			img.style.top = (dimensions.top) + 'px';
            img.style.left = (i*imgWidth) + 'px';
			wrap.appendChild(img);
			var img = document.createElement('img');
            img.src = 'blue.png';
			img.setAttribute("height",imgHeight);
            img.setAttribute("width",imgWidth);
			img.style.top = (dimensions.top+dimensions.height) + 'px';
            img.style.left = (i*imgWidth) + 'px';
			wrap.appendChild(img);
	}
	
	
	
} 


function createRow( ){
	var wrap = document.getElementById('wrap');
 
    // Assume the bubble image dimensions and area dimensions
    var imgWidth = 80;
    var imgHeight = 80;
    var rows = 3;
    var cols = 8;
	var dimensions = getOffset(document.getElementById("wrap"));
	for (var i = 0; i < cols; i++){
		var img = document.createElement('img');
            img.src = 'blue.png';
			img.setAttribute("height",imgHeight);
            img.setAttribute("width",imgWidth);
			img.style.top = (dimensions.top) + 'px';
            img.style.left = (i*imgWidth) + 'px';
			wrap.appendChild(img);
	
	}
	
	
}

var player = document.createElement('img');
function addPlayer( ){
	var wrap = document.getElementById('wrap');
 
    // Assume the bubble image dimensions and area dimensions
    var imgWidth = 40;
    var imgHeight = 60;
	var dimensions = getOffset(document.getElementById("wrap"));
	//var player = document.createElement('img');
	player.src = 'player.png';
	player.setAttribute("id", "player1");
	player.setAttribute("height",imgHeight);
    player.setAttribute("width",imgWidth);
	player.style.top = (dimensions.top) + 'px';
    player.style.left = (imgWidth/2) + 'px';
	wrap.appendChild(player);
	
}

function animateMovePlayerRight(){
	
	player.style.transform = "translateX("+imgWidth+")";
	player.style.transitionDuration = "1s";
	//document.getElementById("player1").style.transitionDelay = "1s";


}

function movePlayerRight(){
	var tmp = player.style.left;
	var left = tmp.replace("px", "");
	
	player.style.left = (parseInt(left)+imgWidth)+ 'px'; 
	console.log(player.style.left);
}

function movePlayerLeft(){
	var tmp = player.style.left;
	var left = tmp.replace("px", "");
	
	player.style.left = (parseInt(left)-imgWidth)+ 'px'; 
	console.log(player.style.left);
}

// Initializes the game when the document is loaded
//window.addEventListener('load', loadGame, false);
//loadGame();
createRow();
addPlayer();
animateMovePlayerRight();
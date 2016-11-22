function startGame() {
    myGameArea.start();
	myGamePiece = new component(100, 100, "red", 50, 50, "imagfe");
	createBoard();
}
var availableWidth = 600;
var availableHeight = 600;
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = availableWidth; 
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        //document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		document.body.appendChild(this.canvas)
    }
}


function component(width, height, color, x, y, type) {
  this.type = type;
  if (type == "image") {
    this.image = new Image();
    this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0; 
  this.x = x;
  this.y = y; 
  this.update = function() {
    ctx = myGameArea.context;
    if (type == "image") {
      ctx.drawImage(this.image, 
        this.x, 
        this.y,
        this.width, this.height);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
}


function createBoard (){
	
	
	var tileWidth = 100;
	var tileHeight = 100;
	var numTilesHorizontal = Math.floor((availableWidth-100)/tileWidth);
	var numTilesVertical = Math.floor((availableHeight-100)/tileHeight);
	var myGamePiece; 
	for(var i = 0; i < numTilesHorizontal; i++){
		
		myGamePiece = new component(tileWidth, tileHeight, "blue.PNG", 50+i*tileWidth, 50, "image");
		console.log(myGamePiece);
		myGamePiece = new component(tileWidth, tileHeight, "blue.PNG", 50+i*tileWidth, availableHeight-50, "image");
	}
	
}
startGame();
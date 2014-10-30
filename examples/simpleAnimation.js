// simpleAnimation.js


var Canvas = require("canvas");
var CanvastoE131 = require("../");

var canvas = new Canvas(16,16);


var output = new CanvastoE131(canvas, {host: "10.1.1.5"});



function draw(x, y) {
  	var context = canvas.getContext('2d');
   context.save();
   // Each time before drawing the Rectangle in a new position the previous one was deleted
   context.clearRect(0, 0, 16, 16);
   context.fillStyle = "white";
   context.fillRect(0, 0, 16, 16);

   context.fillStyle = "black";
   //We will create an rectangle whose X cordinate we will change in a loop .
	context.fillRect(x, 5, 5, 5);
  
   x++;
   if(x > 15) { x = 0;}

   // Uncomment the following to see snaps of the canvas
 	//   var fs = require('fs'),
	//   out = fs.createWriteStream(__dirname + '/simpleAnimation.png'),
	//   stream = canvas.pngStream();

	// stream.on('data', function(chunk){
	//   out.write(chunk);
	// });

  
   context.restore();
   output.send();
   setTimeout(function() {draw(x,y);}, 40);
}

draw(0,0);




process.on ("SIGINT", function(){
    output.close();
    process.exit(1);
});

// output.close();
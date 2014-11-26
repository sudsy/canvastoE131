// simpleAnimation.js


var Canvas = require("canvas");
var CanvastoE131 = require("../");

var canvas = new Canvas(48,48);

function mappingFunction(x, y){
  var mapResult;

  if(x % 3 === 0){
    mapResult =  {universe: Math.floor(x / 3) + 1,  channel : y*3 + 1};
  }
  if(x % 3 === 1){
    
    mapResult =  {universe: Math.floor(x / 3) + 1,  channel : (51 + 47 - y)*3 + 1};
  }
  if(x % 3 === 2){
    mapResult =  {universe: Math.floor(x / 3) + 1,  channel : (y + 102)* 3 + 1};
  }

  // if(y > 46) { 
  //   console.log(x + " - " + y )
  //   console.log(mapResult) } ;
  return mapResult;
}

var output = new CanvastoE131(canvas, {host: "10.1.1.21"}, mappingFunction);



function draw(x, y) {
  	var context = canvas.getContext('2d');
   context.save();
   // Each time before drawing the Rectangle in a new position the previous one was deleted
   context.clearRect(0, 0, 48, 48);
   context.fillStyle = "white";
   context.fillRect(0, 0, 48, 48);

   context.fillStyle = "black";
   //We will create an rectangle whose X cordinate we will change in a loop .
	context.fillRect(x, 5, 5, 5);
  
   x++;
   if(x > 48) { x = 0;}

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
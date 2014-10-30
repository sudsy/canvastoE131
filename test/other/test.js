// test.js
var Canvas = require("canvas");
var CanvastoE131 = require("../");

var canvas = new Canvas(10,1);

//create a simple canvas with an image on it
var context = canvas.getContext('2d');
// context.fillStyle="white";
// context.fillRect(0,0,1,10);
context.lineWidth = 1;
context.beginPath();
context.moveTo(2, 0);
context.lineTo(8, 0);
context.stroke();

//Output an image of the canvas
var fs = require('fs'),
  out = fs.createWriteStream(__dirname + '/test.png'),
  stream = canvas.pngStream();

stream.on('data', function(chunk){
  out.write(chunk);
});



// connect the canvas to the sender with mapping
var outputOptions = {
	host: "10.1.1.5"
};

var output = new CanvastoE131(canvas, outputOptions, function(sourceX, sourceY){
	var channelNumber = sourceX + (sourceY * canvas.width);
	return{universe: Math.floor(channelNumber / 512) + 1, channel: channelNumber % 512};
});

setInterval(function(){
	output.sendE131(context.getImageData(0,0, canvas.width, canvas.height).data);
},40);


output.close();




//send the image to the server



// sendSimpleFlipped.js


var Canvas = require("canvas");
var CanvastoE131 = require("../");

var canvas = new Canvas(10,10);

//create a simple canvas with an image on it
var context = canvas.getContext('2d');
context.fillStyle="white";
context.fillRect(0,0,10,10);

// console.log(CanvastoE131);
// connect the canvas to the sender with mapping
// Pass in the mapping function this time - you can pass your own
// CanvastoE131.mapping.snake is the default, we are passing it through the flip function to flip the matrix diagonally
var output = new CanvastoE131(canvas, {host: "10.1.1.5"}, CanvastoE131.mapping.flipDiagonalFunction(CanvastoE131.mapping.snake));


output.send();


process.on ("SIGINT", function(){
    output.close();
    process.exit(1);
});


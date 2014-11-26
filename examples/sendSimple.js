// sendSimple.js

var Canvas = require("canvas");
var CanvastoE131 = require("../");

var canvas = new Canvas(10,10);

//create a simple canvas with an image on it
var context = canvas.getContext('2d');
context.fillStyle="white";
context.fillRect(0,0,10,10);


// connect the canvas to the sender with mapping
var output = new CanvastoE131(canvas, {host: "10.1.1.21"});


output.send();


process.on ("SIGINT", function(){
    output.close();
    process.exit(1);
});


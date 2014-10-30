#Canvas to E1.31

This module lets you control lights by drawing on a canvas. It was designed primarily for a grid of led strips. You can create animations by painting to the canvas in a loop and sending the output with this module. While node-canvas is not a dependency of the module, you will need to pass an instance of node-canvas to this module.

##Features
* Use your favourite graphics library to draw to the canvas and then output to sAcn (E1.31)
* Choose different sections of the canvas to output to different lighting fixtures
* Supports common snaked cabling by default - supply a function to map in whatever way you like
* Includes a comprehencive test suite

##Usage
A number of examples are included in the examples directory including a simple animation. A very basic example follows:

```javascript
// sendSimple.js

var Canvas = require("canvas");
var CanvastoE131 = require("canvastoe131");

var canvas = new Canvas(10,10);

//create a simple canvas with an image on it
var context = canvas.getContext('2d');
context.fillStyle="white";
context.fillRect(0,0,10,10);


// connect the canvas to the sender with mapping
var output = new CanvastoE131(canvas, {host: "10.1.1.5"});


output.send();


process.on ("SIGINT", function(){
    output.close();
    process.exit(1);
});


```


 
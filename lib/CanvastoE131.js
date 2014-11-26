// canvastoE131.js
var Controller = require("./E131Controller.js");


/**
 * Constructor used to set up the section of the canvas to send to E131
 * @param  {canvas} aCanvas canvas instance to use as source
 * @param  {function} [mappingFunction] function for mapping pixels in the source to E131 universe, pixel numbers of form f(x,y){ return {universe:int,channel:int}}
 * @param  {string} [options.host] ip Address of the server (defaults to port 5568 for output)
 * @param  {string} [options.channelOrder] order of the channels in the E1.31 universe either RGB or RBG (defaults to RGB)
 * @param  {int} [options.port] port of the server (defaults to port 5568 for output)
 * @param  {object} [options.canvasRect] {x,y,width,height} The rectangle to use as the source - if ommitted the whole canvas is used
 * @return {CanvasToE131} an instance of the CanvastoE131 class
 */
function CanvastoE131(aCanvas, options, mappingFunction){
	options = options || {};
	options.channelOrder = options.channelOrder || "RGB";
	options.port = options.port || 5568;
	options.canvasRect = options.canvasRect || {x: 0, y: 0, width: aCanvas.width, height: aCanvas.height};
	options.host = options.host || "127.0.0.1";

	mappingFunction = mappingFunction || require("./mapping/snake.js");
	

	if(!aCanvas){
		throw new Error("Must Supply Canvas");
	}
	
	this.canvas = aCanvas;

	this.options = options;

	//Create an Array to hold the mapping data
	this.mappingArray = new Array(options.canvasRect.width * options.canvasRect.height);

	var that = this;

	var mapPixel = function(x,y){
		//get the starting universe and channel
		// console.log((x+1)*(y+1));
		var arrayPosition = x + (y * aCanvas.width);
		// console.log(arrayPosition);
		that.mappingArray[arrayPosition] = mappingFunction(x,y, aCanvas.width, aCanvas.height);
		
	};
	for(var x =0 , y = 0; x*y < (options.canvasRect.width -1) * (options.canvasRect.height -1) ; x++ >= options.canvasRect.width - 1 && (x=0, y++)){
		mapPixel(x,y);
	}
	//map the last pixel
	mapPixel(options.canvasRect.width-1, options.canvasRect.height -1);

	//Create a new controller for this port and host
	this.controller = new Controller(options.host, options.port);


}
//
CanvastoE131.prototype.send = function(pixelArray){

	pixelArray = pixelArray || this.canvas.getContext('2d').getImageData(0,0, this.canvas.width, this.canvas.height).data;

	for(var i = 0; i < this.mappingArray.length; i++){
		//set the RGB values
		var mappingElement = this.mappingArray[i];
		var transparency = pixelArray[i*4 + 3] / 255;
		var universe = mappingElement.universe;
		var channel =  mappingElement.channel;
		this.controller.setChannel(universe, channel, pixelArray[i*4] * transparency);
		channel++;
		if(channel > 512){ universe++; channel = 1;}
		this.controller.setChannel(universe, channel, pixelArray[i*4 + 1] * transparency);
		channel++;
		if(channel > 512){ universe++; channel = 1;}
		this.controller.setChannel(universe, channel, pixelArray[i*4 + 2] * transparency);
	}

	this.controller.send();
};

CanvastoE131.prototype.close = function(callback) {
	this.controller.close(callback);
};

module.exports = CanvastoE131;
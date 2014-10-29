// canvastoE131.js
var Controller = require("./E131Controller.js");


/**
 * Constructor used to set up the section of the canvas to send to E131
 * @param  {canvas} aCanvas canvas instance to use as source
 * @param  {function} mappingFunction function for mapping pixels in the source to E131 universe, pixel numbers of form f(x,y){ return {universe:int,channel:int}}
 * @param  {string} options.host ip Address of the server (defaults to port 5568 for output)
 * @param  {string} [options.channelOrder] order of the channels in the E1.31 universe either RGB or RBG (defaults to RGB)
 * @param  {int} [options.port] port of the server (defaults to port 5568 for output)
 * @param  {object} [options.canvasRect] {x,y,width,height} The rectangle to use as the source - if ommitted the whole canvas is used
 * @return {CanvasToE131} an instance of the CanvastoE131 class
 */
function CanvastoE131(aCanvas, options, mappingFunction){
	options.channelOrder = options.channelOrder || "RGB";
	options.port = options.port || 5568;
	options.canvasRect = options.canvasRect || {x: 0, y: 0, width: aCanvas.width, height: aCanvas.height};

	if(!options.host){
		throw new Error("must supply options.host");
	}
	if(!aCanvas){
		throw new Error("Must Supply Canvas");
	}
	if(!mappingFunction){
		throw new Error("Must Supply mappingFunction");
	}

	this.options = options;

	//Create an Array to hold the mapping data
	this.mappingArray = new Array(options.canvasRect.width * options.canvasRect.height);

	var that = this;

	var mapPixel = function(x,y){
		//get the starting universe and channel
		// console.log((x+1)*(y+1));
		var arrayPosition = x + (y * aCanvas.width);
		// console.log(arrayPosition);
		that.mappingArray[arrayPosition] = mappingFunction(x,y);
	};
	for(var x =0 , y = 0; x*y < (options.canvasRect.width -1) * (options.canvasRect.height -1) ; x++ >= options.canvasRect.width - 1 && (x=0, y++)){
		mapPixel(x,y);
	}
	//map the last pixel
	mapPixel(options.canvasRect.width-1, options.canvasRect.height -1);
	// console.log(options.host);
	//Create a new controller for this port and host
	this.controller = new Controller(options.host, options.port);


}

CanvastoE131.prototype.sendE131 = function(pixelArray){
	// console.log(pixelArray[0]);
	for(var i = 0; i < this.mappingArray.length; i++){
		//set the RGB values
		var mappingElement = this.mappingArray[i];
		// console.log(i);
		this.controller.setChannel(mappingElement.universe, mappingElement.channel, pixelArray[i*4]);
		this.controller.setChannel(mappingElement.universe, mappingElement.channel + 1, pixelArray[i*4 + 1]);
		this.controller.setChannel(mappingElement.universe, mappingElement.channel + 2, pixelArray[i*4 + 2]);
	}

	this.controller.send();
};

CanvastoE131.prototype.close = function() {
	this.controller.close();
};

module.exports = CanvastoE131;
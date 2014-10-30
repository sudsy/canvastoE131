//testCanvastoE131.js

var should = require("should");
var sinon = require("sinon");
var debug = require("debug")("tests");
// var before = should.before;

describe('When sending a one pixel white canvas',function(){
	var Canvas = require("canvas");
	var CanvastoE131 = require("../lib/CanvastoE131.js");
	var output;
	

	before(function(){

		var canvas = new Canvas(1,1);

		//create a simple canvas with an image on it
		var context = canvas.getContext('2d');
		context.fillStyle="white";
		context.fillRect(0,0,1,1);
		

		output = new CanvastoE131(canvas);
		output.controller.setChannel = sinon.spy();
		output.send();
		output.close();
	  
	});

	it('controller setChannel should be called with universe 1 channel 1 set to 255',function(){

	 	// debugger;
	 	should(output.controller.setChannel.calledWith(1,1,255)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 2 set to 255',function(){
		debugger;
	 	should(output.controller.setChannel.calledWith(1,2,255)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 3 set to 255',function(){

	 	should(output.controller.setChannel.calledWith(1,3,255)).ok;
	});


});

describe('When sending a one pixel black canvas',function(){
	var Canvas = require("canvas");
	var CanvastoE131 = require("../lib/CanvastoE131.js");
	var output;
	

	before(function(){

		var canvas = new Canvas(1,1);

		//create a simple canvas with an image on it
		var context = canvas.getContext('2d');
		context.fillStyle="black";
		context.fillRect(0,0,1,1);

		output = new CanvastoE131(canvas);
		output.controller.setChannel = sinon.spy();
		output.send();
		output.close();
	  
	});

	it('controller setChannel should be called with universe 1 channel 1 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,1,0)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 2 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,2,0)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 3 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,3,0)).ok;
	});


});

describe('When sending a one pixel red canvas',function(){
	var Canvas = require("canvas");
	var CanvastoE131 = require("../lib/CanvastoE131.js");
	var output;
	

	before(function(){

		var canvas = new Canvas(1,1);

		//create a simple canvas with an image on it
		var context = canvas.getContext('2d');
		context.fillStyle="red";
		context.fillRect(0,0,1,1);

		output = new CanvastoE131(canvas);
		output.controller.setChannel = sinon.spy();
		output.send();
		output.close();
	  
	});

	it('controller setChannel should be called with universe 1 channel 1 set to 255',function(){

	 	should(output.controller.setChannel.calledWith(1,1,255)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 2 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,2,0)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 3 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,3,0)).ok;
	});


});

describe('When sending a one pixel green canvas',function(){
	var Canvas = require("canvas");
	var CanvastoE131 = require("../lib/CanvastoE131.js");
	var output;
	

	before(function(){

		var canvas = new Canvas(1,1);

		//create a simple canvas with an image on it
		var context = canvas.getContext('2d');
		context.fillStyle="rgb(0,255,0)";
		context.fillRect(0,0,1,1);

		output = new CanvastoE131(canvas);
		output.controller.setChannel = sinon.spy();
		output.send();
		output.close();
	  
	});

	it('controller setChannel should be called with universe 1 channel 1 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,1,0)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 2 set to 255',function(){

	 	should(output.controller.setChannel.calledWith(1,2,255)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 3 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,3,0)).ok;
	});


});

describe('When sending a one pixel blue canvas',function(){
	var Canvas = require("canvas");
	var CanvastoE131 = require("../lib/CanvastoE131.js");
	var output;
	

	before(function(){

		var canvas = new Canvas(1,1); 

		//create a simple canvas with an image on it
		var context = canvas.getContext('2d');
		context.fillStyle="blue";
		context.fillRect(0,0,1,1);

		output = new CanvastoE131(canvas);
		output.controller.setChannel = sinon.spy();
		output.send();
		output.close();
	  
	});

	it('controller setChannel should be called with universe 1 channel 1 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,1,0)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 2 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,2,0)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 3 set to 255',function(){

	 	should(output.controller.setChannel.calledWith(1,3,255)).ok;
	});


});

describe('When sending a one pixel transparent white canvas',function(){
	var Canvas = require("canvas");
	var CanvastoE131 = require("../lib/CanvastoE131.js");
	var output;
	

	before(function(){

		var canvas = new Canvas(1,1);

		//create a simple canvas with an image on it
		var context = canvas.getContext('2d');
		context.fillStyle="rgba(255,255,255,0)";
		context.fillRect(0,0,1,1);

		output = new CanvastoE131(canvas);
		output.controller.setChannel = sinon.spy();
		output.send();
		output.close();
	  
	});

	it('controller setChannel should be called with universe 1 channel 1 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,1,0)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 2 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,2,0)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 3 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,3,0)).ok;
	});


});

describe('When sending a one pixel half transparent white canvas',function(){
	var Canvas = require("canvas");
	var CanvastoE131 = require("../lib/CanvastoE131.js");
	var output;
	

	before(function(){

		var canvas = new Canvas(1,1);

		//create a simple canvas with an image on it
		var context = canvas.getContext('2d');
		context.fillStyle="rgba(255,255,255,0.5)";
		context.fillRect(0,0,1,1);

		output = new CanvastoE131(canvas);
		output.controller.setChannel = sinon.spy();
		output.send();
		output.close();
	  
	});

	it('controller setChannel should be called with universe 1 channel 1 set to 127',function(){

	 	should(output.controller.setChannel.calledWith(1,1,127)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 2 set to 127',function(){

	 	should(output.controller.setChannel.calledWith(1,2,127)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 3 set to 127',function(){

	 	should(output.controller.setChannel.calledWith(1,3,127)).ok;
	});


});

describe('When sending a 4 pixel canvas with each pixel different colours',function(){
	var Canvas = require("canvas");
	var CanvastoE131 = require("../lib/CanvastoE131.js");
	var output;
	

	before(function(){

		var canvas = new Canvas(2,2);

		//create a simple canvas with an image on it
		var context = canvas.getContext('2d');
		var imageData = context.getImageData(0,0,2,2);
		var pixels = imageData.data;
		//first pixel white
		pixels[0] = 255;
		pixels[1] = 255;
		pixels[2] = 255;
		pixels[3] = 255;
		// second pixel red
		pixels[4] = 255;
		pixels[5] = 0;
		pixels[6] = 0;
		pixels[7] = 255;
		//third pixel green
		pixels[8] = 0;
		pixels[9] = 255;
		pixels[10] = 0;
		pixels[11] = 255;
		//forth pixel blue
		pixels[12] = 0;
		pixels[13] = 0;
		pixels[14] = 255;
		pixels[15] = 255;
		context.putImageData(imageData, 0,0);

		output = new CanvastoE131(canvas);
		output.controller.setChannel = sinon.spy();
		output.send();
		output.close();
	  
	});

	it('controller setChannel should be called with first channelgroup white',function(){

	 	should(output.controller.setChannel.calledWith(1,1,255)).ok;
	 	should(output.controller.setChannel.calledWith(1,2,255)).ok;
	 	should(output.controller.setChannel.calledWith(1,3,255)).ok;
	});

	it('controller setChannel should be called with second channelgroup red',function(){
		
	 	should(output.controller.setChannel.calledWith(1,4,255)).ok;
	 	should(output.controller.setChannel.calledWith(1,5,0)).ok;
	 	should(output.controller.setChannel.calledWith(1,6,0)).ok;
	});

	it('controller setChannel should be called with third channelgroup green',function(){
		
	 	should(output.controller.setChannel.calledWith(1,7,0)).ok;
	 	should(output.controller.setChannel.calledWith(1,8,255)).ok;
	 	should(output.controller.setChannel.calledWith(1,9,0)).ok;
	});

	it('controller setChannel should be called with forth channelgroup blue',function(){
		
	 	should(output.controller.setChannel.calledWith(1,10,0)).ok;
	 	should(output.controller.setChannel.calledWith(1,11,0)).ok;
	 	should(output.controller.setChannel.calledWith(1,12,255)).ok;
	});


});

describe('When sending a 16 by 16 pixel canvas with a single white pixel',function(){
	var Canvas = require("canvas");
	var CanvastoE131 = require("../lib/CanvastoE131.js");
	var output;
	

	before(function(){

		var canvas = new Canvas(16,16);

		//create a simple canvas with an image on it
		var context = canvas.getContext('2d');
		var imageData = context.getImageData(0,0,16,16);
		var pixels = imageData.data;
		//pixel 10 10 red
		pixels[680] = 255;
		pixels[681] = 255;
		pixels[682] = 255;
		pixels[683] = 255;
		
		context.putImageData(imageData, 0,0);

		output = new CanvastoE131(canvas);
		output.controller.setChannel = sinon.spy();
		output.send();
		output.close();
	  
	});

	it('controller setChannel should be called with the pixel before the white one black',function(){
		
	 	should(output.controller.setChannel.calledWith(1,508,0)).ok;
	 	should(output.controller.setChannel.calledWith(1,509,0)).ok;
	 	should(output.controller.setChannel.calledWith(1,510,0)).ok;
	});

	it('controller setChannel should be called with the white pixel on the boundary of two universes',function(){

	 	should(output.controller.setChannel.calledWith(1,511,255)).ok;
	 	should(output.controller.setChannel.calledWith(1,512,255)).ok;
	 	should(output.controller.setChannel.calledWith(2,1,255)).ok;
	});

	it('controller setChannel should be called with the pixel after the white one black',function(){
		
	 	should(output.controller.setChannel.calledWith(2,2,0)).ok;
	 	should(output.controller.setChannel.calledWith(2,3,0)).ok;
	 	should(output.controller.setChannel.calledWith(2,4,0)).ok;
	});

	


});

describe('When sending a 48 by 50 pixel canvas ',function(){
	var Canvas = require("canvas");
	var CanvastoE131 = require("../lib/CanvastoE131.js");
	var output;

	var start;
	var end;


	before(function(){

		var canvas = new Canvas(48,50);

		//create a simple canvas with an image on it
		var context = canvas.getContext('2d');
		
		output = new CanvastoE131(canvas);
		// output.controller.setChannel = sinon.spy();
		start = new Date().getTime();
		output.send();
		end = new Date().getTime();
		output.close();
	  
	});

	it('should send the canvas in less than 5 miliseconds', function(){
		(end - start).should.be.below(5);
	});

});
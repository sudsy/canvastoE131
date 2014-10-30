//testE131Controller.js
//
var should = require("should");
var sinon = require("sinon");

describe('When setting channel 1 in universe 1 to 255',function(){
	var Controller = require("../lib/E131Controller.js");
	var e131Controller;

	before(function(){
	  e131Controller = new Controller("127.0.0.1");
	  e131Controller.setChannel(1,1,255);
	});

	it('should have an E31 controller at position 1 of the controller array',function(){

	 	e131Controller.universeControllers[1].should.be.an.Object;
	});

	it('should have the universe set to one on the data array for that controller', function(){
	 	// console.log("Here");
	 	e131Controller.universeControllers[1].data[114].should.equal(1);
	})

	it('should have channel one in the dmxData set to 255 for that controller', function(){
		 e131Controller.universeControllers[1].dmxdata[0].should.equal(255);
	})
});


describe('When setting channel 1 in universe 2 to 255',function(){
	var Controller = require("../lib/E131Controller.js");
	var e131Controller;

	before(function(){
	  e131Controller = new Controller("127.0.0.1");
	  e131Controller.setChannel(2,1,255);
	});

	it('should have an E31 controller at position 2 of the controller array',function(){

	 	e131Controller.universeControllers[2].should.be.an.Object; 
	});

	it('should have the universe set to two on the data array for that controller', function(){
	 	e131Controller.universeControllers[2].data[114].should.equal(2);
	})

	it('should have channel one in the dmxData set to 255 for that controller', function(){
		 e131Controller.universeControllers[2].dmxdata[0].should.equal(255);
	})
});

describe('When setting channel 1 in universe 1 and 2 to 255',function(){
	var Controller = require("../lib/E131Controller.js");
	var e131Controller;

	before(function(){
	  e131Controller = new Controller("127.0.0.1");
	  e131Controller.setChannel(1,1,255);
	  e131Controller.setChannel(2,1,255);
	});

	it('should have an E31 controller at position 1 of the controller array',function(){

	 	e131Controller.universeControllers[1].should.be.an.Object;
	});

	it('should have the universe set to one on the data array for that controller', function(){
	 	e131Controller.universeControllers[1].data[114].should.equal(1);
	})

	it('should have channel one in the dmxData set to 255 for that controller', function(){
		 e131Controller.universeControllers[1].dmxdata[0].should.equal(255);
	})

	it('should have an E31 controller at position 2 of the controller array',function(){

	 	e131Controller.universeControllers[2].should.be.an.Object;
	});

	it('should have the universe set to two on the data array for that controller', function(){
	 	e131Controller.universeControllers[2].data[114].should.equal(2);
	})

	it('should have channel one in the dmxData set to 255 for that controller', function(){
		 e131Controller.universeControllers[2].dmxdata[0].should.equal(255);
	})
});

describe('When sending controller data for universe 1 and 2', function(){
	var Controller = require("../lib/E131Controller.js");
	var e131Controller;

	before(function(){
	  e131Controller = new Controller("127.0.0.1");
	  e131Controller.setChannel(1,1,255);
	  e131Controller.setChannel(2,1,255);
	  e131Controller.universeControllers[1].send = sinon.spy();
	  e131Controller.universeControllers[2].send = sinon.spy();
	  e131Controller.send();
	});

	it('should have an E31 controller at position 1 and 2 of the controller array',function(){

	 	e131Controller.universeControllers[1].should.be.an.Object;
	 	e131Controller.universeControllers[2].should.be.an.Object;
	});

	it('should call the send function of both controllers', function(){
		e131Controller.universeControllers[1].send.called.should.equal(true);
		e131Controller.universeControllers[2].send.called.should.equal(true);
	})


	it('the data object passed to the send function on controller 1 should have channel 1 set to 255', function(){
		//Don't know why there is the double array declaration here
		var dataArray =  e131Controller.universeControllers[1].send.args[0][0];
		dataArray[0].should.equal(255);
	})	


	it('the data object passed to the send function on controller 2 should have channel 1 set to 255', function(){
		var dataArray =  e131Controller.universeControllers[2].send.args[0][0];
		dataArray[0].should.equal(255);
	})	
})
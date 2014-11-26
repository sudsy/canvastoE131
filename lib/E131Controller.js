//E131Controller.js
//
var e131 = require("node-e131");



function E131Controller(host, port){
	this.host = host;
	this.port= port;
	this.universeControllers = [];
}

E131Controller.prototype.setChannel = function(universe, channel, value){

	// console.log("set universe " + universe);
	this.universeControllers[universe] = this.universeControllers[universe] || e131.createClient(this.host, this.port, universe);
 

	// console.log(this.port);
	this.universeControllers[universe].dmxdata = this.universeControllers[universe].dmxdata || new Array(512);

	// console.log(universe + "-" + channel + "-" + value);
	this.universeControllers[universe].dmxdata[channel - 1] = value;
	
};

E131Controller.prototype.send = function(){
	this.universeControllers.forEach(function(controller){
		// console.log(controller.dmxdata);
		controller.send(controller.dmxdata);
	});
};

E131Controller.prototype.close = function(callback){
	this.universeControllers.forEach(function(controller){
		for(var i = 0; i < 512; i++){
			controller.dmxdata[i] = 0;
		}
		controller.send(controller.dmxdata);
		setTimeout(function(){
			controller.close();
		}, 100);
		
	});

	setTimeout(callback, 2000);
};


module.exports =E131Controller;
// testMappingSnake.js

describe('When using the row mapping function on a 2 by 3 array',function(){
	var rowMap = require("../lib/mapping/snake.js");
	it("should return channel 1, universe 1 for x = 0 and y = 0", function(){
		rowMap(0,0, 2).should.eql({universe:1, channel : 1});
	});
	it("should return channel 4, universe 1 for x = 1 and y = 0", function(){
		rowMap(1,0, 2).should.eql({universe:1, channel : 4});
	}); 
	it("should return channel 10, universe 1 for x = 0 and y = 1", function(){
		rowMap(0,1, 2).should.eql({universe:1, channel : 10});
	});
	it("should return channel 7, universe 1 for x = 1 and y = 1", function(){
		rowMap(1,1, 2).should.eql({universe:1, channel : 7});
	});
	it("should return channel 13, universe 1 for x = 0 and y = 2", function(){
		rowMap(0,2, 2).should.eql({universe:1, channel : 13});
	});
	it("should return channel 16, universe 1 for x = 1 and y = 2", function(){
		rowMap(1,2, 2).should.eql({universe:1, channel : 16});
	});
});

describe('When using the row mapping function on a 16 by 16 array',function(){
	var rowMap = require("../lib/mapping/rows.js");
	it("should return channel 511, universe 1 for x = 10 and y = 10", function(){
		rowMap(10,10, 16,16).should.eql({universe:1, channel : 511});
	});
	it("should return channel 2, universe 2 for x = 11 and y = 10", function(){
		rowMap(11,10, 16,16).should.eql({universe:2, channel : 2});
	});
});

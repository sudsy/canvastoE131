// testFlipDiagonalRows.js

describe('When using the Flipped row mapping function on a 2 by 3 array',function(){
	var rows = require("../lib/mapping/rows.js");
	var flipDiagonalFunction = require("../lib/mapping/flipDiagonalFunction.js");
	var rowMap = flipDiagonalFunction(rows); 
	it("should return channel 1, universe 1 for x = 0 and y = 0", function(){
		rowMap(0,0, 2, 3).should.eql({universe:1, channel : 1});
	});
	it("should return channel 10, universe 1 for x = 1 and y = 0", function(){
		rowMap(1,0, 2, 3).should.eql({universe:1, channel : 10});
	}); 
	it("should return channel 7, universe 1 for x = 0 and y = 1", function(){
		rowMap(0,1, 2, 3).should.eql({universe:1, channel : 4});
	});
	it("should return channel 10, universe 1 for x = 1 and y = 1", function(){
		rowMap(1,1, 2, 3).should.eql({universe:1, channel : 13});
	});
	it("should return channel 13, universe 1 for x = 0 and y = 2", function(){
		rowMap(0,2, 2, 3).should.eql({universe:1, channel : 7});
	});
	it("should return channel 16, universe 1 for x = 1 and y = 2", function(){
		rowMap(1,2, 2, 3).should.eql({universe:1, channel : 16});
	});
});

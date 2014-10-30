//flipDiagonalFunction.js

module.exports = function(fn){
	return function(sourceX, sourceY, width, height){
		return fn(sourceY, sourceX, height, width);
	};
};

//rows.js

module.exports = function(sourceX, sourceY, width, height){
	var channelNumber = (sourceX * 3) + (sourceY * width * 3) + 1;
	return{universe: (Math.floor(channelNumber / 512) + 1), channel: channelNumber % 512};
};
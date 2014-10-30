// index.js

var CanvastoE131 = require("./lib/CanvastoE131.js");

CanvastoE131.mapping = {
	rows : require("./lib/mapping/rows.js"),
	snake : require("./lib/mapping/snake.js"),
	flipDiagonalFunction : require("./lib/mapping/flipDiagonalFunction.js")
};

module.exports = CanvastoE131;
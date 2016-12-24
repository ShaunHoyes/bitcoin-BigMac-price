var snapshot = require("./big-mac.js");
var symbols = process.argv.slice(2);

symbols.forEach(snapshot .get);


var http = require("http");
var request = require('request');
var url = "http://bitcoinppi.com/v1.1/countries";

function printMessage(country, price, amount) {
  var message = country + ": \n" + "Price of 1 big mac: " + price + "\n" + "1 bitcoin buys " + amount + " big macs";
  console.log(message);
}

function printError(error) {
  console.error(error.message);
}

function get(symbol) {
  var request = http.get("http://bitcoinppi.com/v1.1/countries/" + symbol.toUpperCase, function(response) {
    var body = "";
    response.on('data', function (chunk) {
      body += chunk;
    });
    response.on('end', function() {
      if(response.statusCode === 200) {
        try {
          var snapshot = JSON.parse(body);
          printMessage(snapshot.country, snapshot.country.bigmac_price, snapshot.country.local_ppi);
        } catch(error) {
          printError(error);
        }
      } else {
        print({message: "There was an error"});
      }
    });
  });

  request.on("error", printError);
}

module.exports.get = get;

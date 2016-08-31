var request = require('request');
var env = require('node-env-file');
var MongoClient = require('mongodb').MongoClient;

var url2 = 'mongodb://localhost:27017/offers';
env(__dirname + '/.env');

var url = process.env.URL_API;
var user = process.env.CLIENT_ID;
var pass = process.env.CLIENT_SECRET;

setInterval(function (){
			//console.log("afasd");
			MongoClient.connect(url2, function(err, db) {

					if (err) throw (err);
					else console.log ("connected to  Mongo succesfully...");

					var auth = "Basic " + new Buffer(user + ":" + pass).toString("base64");
					var parseAndImportData  = require('./handlers/parseAndImportData');

					request( {
						url : url,
						headers : { "Authorization" : auth }
					}, parseAndImportData.bind(null,db) );

					//console.log("1");
});
},25000);
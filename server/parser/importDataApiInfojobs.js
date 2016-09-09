var request = require('request');
var env = require('node-env-file');
var MongoClient = require('mongodb').MongoClient;

//var url2 = 'mongodb://localhost:27017/offers';
var mongoUri = 'mongodb://carl:carl@ds019886.mlab.com:19886/offers';
env(__dirname + '/.env');

var url = process.env.URL_API;
var user = process.env.CLIENT_ID;
var pass = process.env.CLIENT_SECRET;

//setInterval(function (){
	MongoClient.connect(mongoUri, function(err, db) {

		if (err) throw (err);
		else console.log ("connected to  Mongo succesfully...");

		var auth = "Basic " + new Buffer(user + ":" + pass).toString("base64");
		var parseAndImportData  = require('./handlers/parseAndImportData');

		//console.log(url);
		//console.log(auth);

		request( {
			url : url,
			headers : { "Authorization" : auth }
		}, parseAndImportData.bind(null,db) );

});
//},25000);
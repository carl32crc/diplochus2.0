var request = require('request');
var env = require('node-env-file');



function offersMethodOne (req, res) {

	env(__dirname + '/.env');

	var url = process.env.URL_API;
	var user = process.env.CLIENT_ID;
	var pass = process.env.CLIENT_SECRET;

	var urlOffers1 = url.replace('://', '://' + user + ":" + pass + '@');

	request( { url : urlOffers1 }, function (error, response, body) {
		res.json(response);
	});

}

module.exports = offersMethodOne;

function insertTasks(db,posRanking, callback) {
  // Get the documents collection
  var collection = db.collection('offers');

  // Find some documents
  collection.insert(posRanking);

}
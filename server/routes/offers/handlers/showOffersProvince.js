var ObjectID = require('mongodb').ObjectID;

function showOffersProvince(db,req,res){

	var collection = db.collection('offers');
	console.log(collection);
	console.log("showOffersProvince...");
		collection.find({"province":'madrid'})
			.toArray(function(err, data) {
				if (err) throw err;
				res.json(data);
			});
}

module.exports = showOffersProvince;
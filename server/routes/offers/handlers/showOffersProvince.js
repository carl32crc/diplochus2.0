var ObjectID = require('mongodb').ObjectID;

function showOffersProvince(db,req,res){
	var nameProvince = req.params.province;
	var collection = db.collection('offers');
	console.log(nameProvince);
	console.log("showOffersProvince...");
		collection.find({"province":nameProvince})
			.toArray(function(err, data) {
				if (err) throw err;
				res.json(data);
			});
}

module.exports = showOffersProvince;
function showOffers(db,req,res){

  var collection = db.collection('offert');

  console.log("showOffers...");
	collection.find()
		.toArray(function(err, ranking) {
			console.log(ranking);
			if (err) throw err;
			res.json(ranking);
		});
}

module.exports = showOffers;

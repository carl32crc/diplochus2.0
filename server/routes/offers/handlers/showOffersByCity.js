function showOffersCity(req,res){

  console.log("showOffersCity...");
	collection.find()
		.toArray(function(err, data) {
			console.log(data);
			if (err) throw err;
			res.json(data);
		});
}

module.exports = showOffersCity;
function insertRankingMongo(db,posRanking, callback) {

	var collection = db.collection('offert');

	console.log(posRanking);

	collection.insert(posRanking);

}

module.exports = insertRankingMongo;
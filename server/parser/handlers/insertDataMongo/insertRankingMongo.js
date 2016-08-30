function insertRankingMongo(db,posRanking, callback) {

	var collection = db.collection('offers');

	collection.insert(posRanking);

}

module.exports = insertRankingMongo;
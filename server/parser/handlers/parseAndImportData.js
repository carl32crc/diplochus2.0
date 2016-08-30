var ranking = require('./data/ranking');
var rankingDb = require('./data/ranking-db');
var fivePosLanguage = require('./data/first5postionsLanguages.json');
var fivePosDb = require('./data/first5postionsBackEnd.json');
var contBackEnd  = require('./contskillsdata/contBackEnd');
var contLanguage  = require('./contskillsdata/contProgLanguages');
var orderData = require('./orderDataDescending/orderDescending');
var firstPositionInJson = require('./firstFivePosition/firsFivePosition');

function parseAndImportData(db,error, response, body) {

			var objectJSON = JSON.parse(response.body);

			objectJSON.offers.forEach(function(itemAPI){

				var paragraphSkills = itemAPI.requirementMin.replace(/[.\r\n\t, \/-]+/g, " ").toUpperCase().trim();
				var arraySkills = paragraphSkills.split(' ');

				arraySkills.forEach(function(itemSkill,i){
					contLanguage(ranking,itemSkill);
					contBackEnd(rankingDb,itemSkill);
				});
			});

				orderData(ranking);
				orderData(rankingDb);

				removeDataOld(db,function( data ) {
					db.close();
				});

				insertStatistics(db, ranking,function( data ) {
					db.close();
				});

				insertStatistics(db, rankingDb,function( data ) {
					db.close();
				});

			// var total = ranking._numOffers[0].num+ranking._numOffers[1].num+ranking._numOffers[2].num+ranking._numOffers[3].num+ranking._numOffers[4].num;

			// fivePosLanguage.positionOne = tantPercent(ranking._numOffers[0].num,total);
			// fivePosLanguage.positionTwo = tantPercent(ranking._numOffers[1].num,total);
			// fivePosLanguage.positionThree = tantPercent(ranking._numOffers[2].num,total);
			// fivePosLanguage.positionFour = tantPercent(ranking._numOffers[3].num,total);
			// fivePosLanguage.positionFive = tantPercent(ranking._numOffers[4].num,total);

			// var totalDb = rankingDb._numOffers[0].num+rankingDb._numOffers[1].num+rankingDb._numOffers[2].num+rankingDb._numOffers[3].num+rankingDb._numOffers[4].num;

			// fivePosDb.positionOne = tantPercent(rankingDb._numOffers[0].num,totalDb);
			// fivePosDb.positionTwo = tantPercent(rankingDb._numOffers[1].num,totalDb);
			// fivePosDb.positionThree = tantPercent(rankingDb._numOffers[2].num,totalDb);
			// fivePosDb.positionFour = tantPercent(rankingDb._numOffers[3].num,totalDb);
			// fivePosDb.positionFive = tantPercent(rankingDb._numOffers[4].num,totalDb);

			firstPositionInJson(fivePosLanguage,ranking);
			firstPositionInJson(fivePosDb,rankingDb);

			insertStatistics(db, fivePosLanguage,function( data ) {
				db.close();
			});

			insertStatistics(db, fivePosDb,function( data ) {
				db.close();
			});

			//console.dir(objectJSON);
			console.log(fivePosDb);
}

function insertStatistics(db,posRanking, callback) {
	// Get the documents collection
	var collection = db.collection('offers');
	// Find some documents
	collection.insert(posRanking);

}

function removeDataOld(db,callback){
	var collection = db.collection('offers');
	collection.remove( { } );
}


module.exports = parseAndImportData;
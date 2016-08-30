var ranking = require('./data/ranking');
var rankingDb = require('./data/ranking-db');
var contBackEnd  = require('./contskillsdata/contBackEnd');
var contLanguage  = require('./contskillsdata/contProgLanguages');
var orderData = require('./orderDataDescending/orderDescending');

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

			var total = ranking._numOffers[0].num+ranking._numOffers[1].num+ranking._numOffers[2].num+ranking._numOffers[3].num+ranking._numOffers[4].num;

			var firstPercent = tantPercent(ranking._numOffers[0].num,total);
			var secondPercent = tantPercent(ranking._numOffers[1].num,total);
			var thirdPercent = tantPercent(ranking._numOffers[2].num,total);
			var fourPercent = tantPercent(ranking._numOffers[3].num,total);
			var fivePercent = tantPercent(ranking._numOffers[4].num,total);

			var totalDb = rankingDb._numOffers[0].num+rankingDb._numOffers[1].num+rankingDb._numOffers[2].num+rankingDb._numOffers[3].num+rankingDb._numOffers[4].num;

			var firstPercentDb = tantPercent(rankingDb._numOffers[0].num,totalDb);
			var secondPercentDb = tantPercent(rankingDb._numOffers[1].num,totalDb);
			var thirdPercentDb = tantPercent(rankingDb._numOffers[2].num,totalDb);
			var fourPercentDb = tantPercent(rankingDb._numOffers[3].num,totalDb);
			var fivePercentDb = tantPercent(rankingDb._numOffers[4].num,totalDb);

			function  tantPercent(num,total){
				var perCent = ((num/total)*100).toFixed(2);
				return perCent;
			}

			var posRanking = {positionOne:firstPercent,
							positionTwo:secondPercent,
							positionThree:thirdPercent,
							positionFour:fourPercent,
							positionFive:fivePercent};

			var posRankingDb = {positionOne:firstPercentDb,
							positionTwo:secondPercentDb,
							positionThree:thirdPercentDb,
							positionFour:fourPercentDb,
							positionFive:fivePercentDb};


			insertStatistics(db, posRanking,function( data ) {
				db.close();
			});

			insertStatistics(db, posRankingDb,function( data ) {
				db.close();
			});

			//console.dir(objectJSON);
			console.log(posRanking);
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
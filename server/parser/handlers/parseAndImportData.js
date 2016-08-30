var ranking = require('./data/ranking');
var rankingDb = require('./data/ranking-db');
var fivePosLanguage = require('./data/first5postionsLanguages.json');
var fivePosDb = require('./data/first5postionsBackEnd.json');
var contBackEnd  = require('./contskillsdata/contBackEnd');
var contLanguage  = require('./contskillsdata/contProgLanguages');
var orderData = require('./orderDataDescending/orderDescending');
var firstPositionInJson = require('./firstFivePosition/firsFivePosition');
var insertDataInMongo = require('./insertDataMongo/insertRankingMongo');
var removeDataOld  = require('./removeDataOld/removeDataOld');

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

			firstPositionInJson(fivePosLanguage,ranking);
			firstPositionInJson(fivePosDb,rankingDb);

			removeDataOld(db,function( data ) {
				db.close();
			});

			insertDataInMongo(db, ranking,function( data ) {
				db.close();
			});

			insertDataInMongo(db, rankingDb,function( data ) {
				db.close();
			});

			insertDataInMongo(db, fivePosLanguage,function( data ) {
				db.close();
			});

			insertDataInMongo(db, fivePosDb,function( data ) {
				db.close();
			});
			//console.dir(objectJSON);
			console.log(fivePosDb);
}

module.exports = parseAndImportData;
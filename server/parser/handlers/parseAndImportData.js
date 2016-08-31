var ranking = require('./data/ranking');

var contBackEnd  = require('./utils/contBackEnd');
var contLanguage  = require('./utils/contProgLanguages');
var orderData = require('./utils/orderDescending');
var firstPositionInJson = require('./utils/firsFivePosition');
var insertDataInMongo = require('./utils/insertRankingMongo');
var removeDataOld  = require('./utils/removeDataOld');
var resetDataRanking = require('./utils/resetDataRankig');

function parseAndImportData(db,error, response, body) {

			var objectJSON = JSON.parse(response.body);

			objectJSON.offers.forEach(function(itemAPI){

				var paragraphSkills = itemAPI.requirementMin.replace(/[.\r\n\t, \/-]+/g, " ").toUpperCase().trim();
				var arraySkills = paragraphSkills.split(' ');

				arraySkills.forEach(function(itemSkill,i){
					contLanguage(ranking,itemSkill);
					contBackEnd(ranking,itemSkill);
				});
			});

			orderData(ranking._offersLanguage);
			orderData(ranking._offersBackEnd);

			firstPositionInJson(ranking._fivePosLang,ranking._offersLanguage);
			firstPositionInJson(ranking._fivePosBack,ranking._offersBackEnd);

			removeDataOld(db,function( data ) {
				db.close();
			});

			insertDataInMongo(db, ranking,function( data ) {
				db.close();
			});

			resetDataRanking(ranking);

			console.log(ranking);

}

module.exports = parseAndImportData;
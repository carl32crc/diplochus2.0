var ranking = require('./data/ranking');

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

			//console.dir(objectJSON);
			//console.log(fivePosDb);
}

module.exports = parseAndImportData;
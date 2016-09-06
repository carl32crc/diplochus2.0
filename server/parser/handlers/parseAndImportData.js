var ranking                  =  require('./data/ranking');
var rankingProvince          =  require('./data/rankingProvince');

var contBackEnd              =  require('./utils/contBackEnd');
var contLanguage             =  require('./utils/contProgLanguages');
var orderData                =  require('./utils/orderDescending');
var firstPositionInJson      =  require('./utils/firsFivePosition');
var insertDataInMongo        =  require('./utils/insertRankingMongo');
var removeDataOld            =  require('./utils/removeDataOld');
var resetDataRanking         =  require('./utils/resetDataRankig');
var contLanguageProvince     =  require('./utils/contLanguageProvince');
var contDbaseProvince        =  require('./utils/contDbaseProvince');
var contFramesProvince       =  require('./utils/contFramesworksProvince');
var contOtherSkillsProvince  =  require('./utils/contOtherSkillsProvince');
var contFrameworks           =  require('./utils/contFrameworks');
var contOtherSkills          =  require('./utils/contOtherSkills');
var cleanedString            =  require('./utils/cleanString');

function parseAndImportData(db,error, response, body) {

			var objectJSON = JSON.parse(response.body);

			objectJSON.offers.forEach(function(itemAPI){

				var province        = itemAPI.province.value.toLowerCase().trim();
				var provinceClear   = cleanedString(province).split('/');
				var paragraphSkills = itemAPI.requirementMin.replace(/[().\r\n\t, \/-]+/g, " ").toUpperCase().trim();
				var arraySkills     = paragraphSkills.split(' ');

				arraySkills.forEach(function(itemSkill,i){

					contLanguage(ranking,itemSkill);
					contBackEnd(ranking,itemSkill);
					contFrameworks(ranking,itemSkill);
					contOtherSkills(ranking,itemSkill);
						contLanguageProvince(rankingProvince,itemSkill,provinceClear[0]);
						contDbaseProvince(rankingProvince,itemSkill,provinceClear[0]);
						contFramesProvince(rankingProvince,itemSkill,provinceClear[0]);
						contOtherSkillsProvince(rankingProvince,itemSkill,provinceClear[0]);
				});
			});

			for (var i = 0; i < rankingProvince.length; i++) {
				rankingProvince[i].date  = formattedDate();
			}

			ranking.date = formattedDate();

			orderData(ranking._offersLanguage);
			orderData(ranking._offersBackEnd);
			orderData(ranking._frameworks);
			orderData(ranking._othersskills);

			firstPositionInJson(ranking._fivePosLang,ranking._offersLanguage);
			firstPositionInJson(ranking._fivePosBack,ranking._offersBackEnd);
			firstPositionInJson(ranking._fivePosFrameworks,ranking._frameworks);
			firstPositionInJson(ranking._fivePosOtherSkills,ranking._othersskills);

			removeDataOld(db,function( data ) {
				db.close();
			});

			insertDataInMongo(db, ranking,function( data ) {
				db.close();
			});

			insertDataInMongo(db, rankingProvince,function( data ) {
				db.close();
			});

			resetDataRanking(ranking);

}


function formattedDate(date) {
	var d = new Date(date || Date.now()),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

	return [month, day, year].join('/');
}


module.exports = parseAndImportData;
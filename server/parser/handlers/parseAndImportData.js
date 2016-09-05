var ranking = require('./data/ranking');

var contBackEnd  = require('./utils/contBackEnd');
var contLanguage  = require('./utils/contProgLanguages');
var orderData = require('./utils/orderDescending');
var firstPositionInJson = require('./utils/firsFivePosition');
var insertDataInMongo = require('./utils/insertRankingMongo');
var removeDataOld  = require('./utils/removeDataOld');
var resetDataRanking = require('./utils/resetDataRankig');
var contLanguageProvince = require('./utils/contLanguageProvince');
var contBackEndProvince = require('./utils/contBackEndProvince');
var prueba = require('./data/prueba');
var contFrameworks = require('./utils/contFrameworks');
var contOtherSkills = require('./utils/contOtherSkills');

function parseAndImportData(db,error, response, body) {

			var objectJSON = JSON.parse(response.body);

			objectJSON.offers.forEach(function(itemAPI){

				var province = itemAPI.province.value.toLowerCase().trim();
				//console.log(province);
				var provinceClear = getCleanedString(province).split('/');
				var paragraphSkills = itemAPI.requirementMin.replace(/[().\r\n\t, \/-]+/g, " ").toUpperCase().trim();
				var arraySkills = paragraphSkills.split(' ');
				console.log(arraySkills);
				arraySkills.forEach(function(itemSkill,i){

					contLanguage(ranking,itemSkill);
					contBackEnd(ranking,itemSkill);
					contFrameworks(ranking,itemSkill);
					contOtherSkills(ranking,itemSkill);
						contLanguageProvince(prueba,itemSkill,provinceClear[0]);
						// contLanguageProvince(ranking,itemSkill,provinceClear[0]);
						// contBackEndProvince(ranking,itemSkill,provinceClear[0]);

				});
			});

			prueba.date = formattedDate();
			ranking.date = formattedDate();
			//console.log(typeof(day));

			orderData(ranking._offersLanguage);
			orderData(ranking._offersBackEnd);
			orderData(ranking._frameworks);
			orderData(ranking._othersskills);

			firstPositionInJson(ranking._fivePosLang,ranking._offersLanguage);
			firstPositionInJson(ranking._fivePosBack,ranking._offersBackEnd);
			firstPositionInJson(ranking._fivePosFrameworks,ranking._frameworks);
			firstPositionInJson(ranking._fivePosOtherSkills,ranking._othersskills);

			//console.log(ranking);

			removeDataOld(db,function( data ) {
				db.close();
			});

			insertDataInMongo(db, ranking,function( data ) {
				db.close();
			});

			insertDataInMongo(db, prueba,function( data ) {
				db.close();
			});

			resetDataRanking(ranking);

}

function getCleanedString(cadena){
	// Lo queremos devolver limpio en minusculas
	cadena = cadena.toLowerCase();

	// Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
	cadena = cadena.replace(/á/gi,"a");
	cadena = cadena.replace(/é/gi,"e");
	cadena = cadena.replace(/í/gi,"i");
	cadena = cadena.replace(/ó/gi,"o");
	cadena = cadena.replace(/ú/gi,"u");
	cadena = cadena.replace(/ñ/gi,"n");
	return cadena;
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
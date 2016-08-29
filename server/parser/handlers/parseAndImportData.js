var ranking = require('./data/ranking');
var rankingDb = require('./data/ranking-db');

function parseAndImportData(db,error, response, body) {

			var objectJSON = JSON.parse(response.body);

				for(var index in objectJSON) {
					for (var subItem in objectJSON[index]) {
						var paragraphSkills = objectJSON[index][subItem].requirementMin.replace(/[.\r\n\t, \/-]+/g, " ").toUpperCase().trim();

						var arraySkills = paragraphSkills.split(' ');

						arraySkills.forEach(function(item,i){
							for (var index2 in ranking) {
								for (var subItem in ranking[index2]){

										if(item==='C++' && ranking[index2][subItem].name ==="C++"){
											ranking[index2][subItem].num++;
										}
										if(item==='JAVA' && ranking[index2][subItem].name ==="Java"){
											ranking[index2][subItem].num++;
										}
										if(item==='JAVASCRIPT' && ranking[index2][subItem].name ==="JavaScript"){
											ranking[index2][subItem].num++;
										}
										if(item==='C#' && ranking[index2][subItem].name ==="C#"){
											ranking[index2][subItem].num++;
										}
										if(item==='PYTHON' && ranking[index2][subItem].name ==="Python"){
											ranking[index2][subItem].num++;
										}
										if(item==='ANGULAR' || item==='ANGULARJS' && ranking[index2][subItem].name ==="Angular"){
											ranking[index2][subItem].num++;
										}
										if(item==='PHP' && ranking[index2][subItem].name ==="PHP"){
											ranking[index2][subItem].num++;
										}
										if(item==='NET' && ranking[index2][subItem].name ==="Net"){
											ranking[index2][subItem].num++;
										}
										if(item==='C' && ranking[index2][subItem].name ==="C"){
											ranking[index2][subItem].num++;
										}
										if(item==='COBOL' && ranking[index2][subItem].name ==="Cobol"){
											ranking[index2][subItem].num++;
										}
										if(item==='GO' && ranking[index2][subItem].name ==="Go"){
											ranking[index2][subItem].num++;
										}
										if(item==='SQL'&& ranking[index2][subItem].name ==="SQL"){
											ranking[index2][subItem].num++;
										}
										if(item==='MYSQL'&& ranking[index2][subItem].name ==="MySQL"){
											ranking[index2][subItem].num++;
										}
										if(item==='NODE' && ranking[index2][subItem].name ==="Node"){
											ranking[index2][subItem].num++;
										}
										if(item==='EXPRESS' && ranking[index2][subItem].name ==="Express"){
											ranking[index2][subItem].num++;
										}
										if(item==='DJANGO' && ranking[index2][subItem].name ==="Django"){
											ranking[index2][subItem].num++;
										}
										if(item==='SQLITE' && ranking[index2][subItem].name ==="sQlite"){
											ranking[index2][subItem].num++;
										}
										if(item==='MONGODB' && ranking[index2][subItem].name ==="MongoDb"){
											ranking[index2][subItem].num++;
										}
										if(item==='COUCHDB' && ranking[index2][subItem].name ==="CouchDB"){
											ranking[index2][subItem].num++;
										}
										if(item==='REDIS' && ranking[index2][subItem].name ==="Redis"){
											ranking[index2][subItem].num++;
										}
										if(item==='CASSANDRA' && ranking[index2][subItem].name ==="Cassandra"){
											ranking[index2][subItem].num++;
										}
										if(item==='RUBY' && ranking[index2][subItem].name ==="Ruby"){
											ranking[index2][subItem].num++;
										}
								}
							}

						});
					}
			}


				ranking._numOffers = ranking._numOffers.sort(function(obj1,obj2){

						for(var property in obj1) {
							prop1=property;
						}
						for(property in obj2) {
							prop2=property;
						}
						return obj2[prop2]-obj1[prop1];
					});

				rankingDb._numOffers = rankingDb._numOffers.sort(function(obj1,obj2){

						for(var prop in obj1) {
							prop1=prop;
						}
						for(prop in obj2) {
							prop2=prop;
						}
						return obj2[prop2]-obj1[prop1];
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

			console.dir(objectJSON);
			console.log(posRanking);
}

function insertStatistics(db,posRanking, callback) {
	// Get the documents collection
	var collection = db.collection('offers');
	// Find some documents
	collection.insert(posRanking);

}

module.exports = parseAndImportData;
var express = require('express');
var request = require('request');
var env = require('node-env-file');
var MongoClient = require('mongodb').MongoClient;

var bodyParser = require('body-parser');

var url2 = 'mongodb://localhost:27017/offers';

var app = express();
env(__dirname + '/.env');
app.use(bodyParser.urlencoded({ extended: false }));

var url = process.env.URL_API;
var user = process.env.CLIENT_ID;
var pass = process.env.CLIENT_SECRET;

MongoClient.connect(url2, function(err, db) {

	if (err) throw (err);
	else console.log ("connected to  Mongo succesfully...");

	app.get('/offers-method-one', require("./handlers/offersMethodOne") );


    app.get('/offers-method-two', function (req, res) {

	var auth = "Basic " + new Buffer(user + ":" + pass).toString("base64");

	request( {
		url : url,
		headers : { "Authorization" : auth }
	}, function (error, response, body) {

				var objectJSON = JSON.parse(response.body);

				var ranking={_numOffers:[{name:"C++",num:0},{name:"Java",num:0},{name:"JavaScript",num:0},
							{name:"C#",num:0},{name:"Python",num:0},{name:"Angular",num:0},
							{name:"PHP",num:0},{name:"Net",num:0},{name:"C",num:0},
							{name:"Cobol",num:0},{name:"Go",num:0}]};

				var rankingDb={_numOffers:[{name:"SQL",num:0},{name:"MySQL",num:0},{name:"Node",num:0},
							{name:"Express",num:0},{name:"Django",num:0},{name:"sQlite",num:0},
							{name:"MongoDb",num:0},{name:"CouchDB",num:0},{name:"Redis",num:0},
							{name:"Cassandra",num:0},{name:"Ruby",num:0}]};

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
							for(var prop in obj2) {
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

				var total = ranking._numOffers[0].num+ranking._numOffers[1].num
							 +ranking._numOffers[2].num+ranking._numOffers[3].num
							 +ranking._numOffers[4].num;

				var firstPercent = tantPercent(ranking._numOffers[0].num,total);
				var secondPercent = tantPercent(ranking._numOffers[1].num,total);
				var thirdPercent = tantPercent(ranking._numOffers[2].num,total);
				var fourPercent = tantPercent(ranking._numOffers[3].num,total);
				var fivePercent = tantPercent(ranking._numOffers[4].num,total);

				var totalDb =   rankingDb._numOffers[0].num+rankingDb._numOffers[1].num
							+rankingDb._numOffers[2].num+rankingDb._numOffers[3].num
							+rankingDb._numOffers[4].num;
				console.log(totalDb);

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
								positionFive:fivePercent}

				var posRankingDb = {positionOne:firstPercentDb,
								positionTwo:secondPercentDb,
								positionThree:thirdPercentDb,
								positionFour:fourPercentDb,
								positionFive:fivePercentDb}


				insertStatistics(db, posRanking,function( data ) {
					db.close();
				});

				insertStatistics(db, posRankingDb,function( data ) {
					db.close();
				});

				res.json(objectJSON);
				console.log(posRanking );
	});
});


	app.listen(3000);

});

function insertStatistics(db,posRanking, callback) {
	// Get the documents collection
	var collection = db.collection('offers');
	// Find some documents
	collection.insert(posRanking);

}

function contSkills(object){

}
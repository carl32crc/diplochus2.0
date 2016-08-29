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

				var _cPlusPlus,_java,_javaScript,_visualBasic,
					_python,_angular,_php,_NET,_C,_cobol,_go,
					_sql,_mySql,_node,_express,_django,_sQlite,
					_mongoDb,_couchDB,_redis,_cassandra,_ruby;

				var arrCont =  [contCplusPlus = 0,contJava = 0,
								contJavaScript = 0,contVisualBasic = 0,contPython = 0,
								contAngularjs=0,contPHP=0,contNET  = 0,contCsharp = 0,
								contCobol=0,contGo=0,contSql = 0,contMySql = 0,
								contNode = 0,contExpress = 0,contDjango = 0,
								contSqlite=0,contMongodb=0,contCouchDb  = 0,contRedis = 0,
								contCassandra=0,contRuby=0];

					for(var index in objectJSON) {
						for (var subItem in objectJSON[index]) {
							var paragraphSkills = objectJSON[index][subItem].requirementMin.replace(/[.\r\n\t, \/-]+/g, " ").toUpperCase().trim();

							var arraySkills = paragraphSkills.split(' ');
							arraySkills.forEach(function(item,i){

								if(item==='C++'){
									_cPlusPlus = arrCont[0]++;
								}
								if(item==='JAVA'){
									_java =  arrCont[1]++;
								}
								if(item==='JAVASCRIPT'){
									_javaScript = arrCont[2]++;
								}
								if(item==='C#'){
									_cSharp = arrCont[3]++;
								}
								if(item==='PYTHON'){
									_python = arrCont[4]++;
								}
								if(item==='ANGULAR' || item==='ANGULARJS'){
									_angular = arrCont[5]++;
								}
								if(item==='PHP'){
									_php = arrCont[6]++;
								}
								if(item==='NET'){
									_NET = arrCont[7]++;
								}
								if(item==='C'){
									_C = arrCont[8]++;
								}
								if(item==='COBOL'){
									_cobol = arrCont[9]++;
								}
								if(item==='GO'){
									_go = arrCont[10]++;
								}
								if(item==='SQL'){
									_sql = arrCont[11]++;
								}
								if(item==='MYSQL'){
									_mySql =  arrCont[12]++;
								}
								if(item==='NODE'){
									_node = arrCont[13]++;
								}
								if(item==='EXPRESS'){
									_express = arrCont[14]++;
								}
								if(item==='DJANGO'){
									_django = arrCont[15]++;
								}
								if(item==='SQLITE'){
									_sQlite = arrCont[16]++;
								}
								if(item==='MONGODB'){
									_mongoDb = arrCont[17]++;
								}
								if(item==='COUCHDB'){
									_couchDB = arrCont[18]++;
								}
								if(item==='REDIS'){
									_redis = arrCont[19]++;
								}
								if(item==='CASSANDRA'){
									_cassandra = arrCont[20]++;
								}
								if(item==='RUBY'){
									_ruby = arrCont[21]++;
								}
							});
						}
				}

				var ranking={_numOffers:[{name:"C++",num:_cPlusPlus},{name:"Java",num:_java},{name:"JavaScript",num:_javaScript},
							{name:"C#",num:_cSharp},{name:"Python",num:_python},{name:"Angular",num:_angular},
							{name:"PHP",num:_php},{name:"Net",num:_NET},{name:"C",num:_C},
							{name:"Cobol",num:_cobol},{name:"Go",num:_go}]};

				var rankingDb={_numOffers:[{name:"SQL",num:_sql},{name:"MySQL",num:_mySql},{name:"Node",num:_node},
							{name:"Express",num:_express},{name:"Django",num:_django},{name:"sQlite",num:_sQlite},
							{name:"MongoDb",num:_mongoDb},{name:"CouchDB",num:_couchDB},{name:"Redis",num:_redis},
							{name:"Cassandra",num:_cassandra},{name:"Ruby",num:_ruby}]};


					ranking._numOffers = ranking._numOffers.sort(function(obj1,obj2){

							for(var prop in obj1) {
								prop1=prop;
							}
							for(prop in obj2) {
								prop2=prop;
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
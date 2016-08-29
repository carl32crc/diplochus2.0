var request = require('request');
var env = require('node-env-file');



function offersMethodTwo (req, res) {

	env(__dirname + '/.env');

	var url = process.env.URL_API;
	var user = process.env.CLIENT_ID;
	var pass = process.env.CLIENT_SECRET;

	var auth = "Basic " + new Buffer(user + ":" + pass).toString("base64");

	request( {
		url : url,
		headers : { "Authorization" : auth }
	}, function (error, response, body) {

				var o = JSON.parse(response.body);

				var _cPlusPlus,_java,_javaScript,_ruby,
				    _python,_angular,_php,_NET,_cSharp,_cobol,_go;

				var arrCont =  [contCplusPlus = 0,contJava = 0,
								contJavaScript = 0,contRuby = 0,contPython = 0,
								contAngularjs=0,contPHP=0,contNET  = 0,contCsharp = 0,
								contCobol=0,contGo=0]

					for(var index in o) {
						for (subItem in o[index]) {
						     var c = o[index][subItem].requirementMin.replace(/[.\r\n\t, \/-]+/g, " ").toUpperCase().trim();

						     var arr = c.split(' ');
						     arr.forEach(function(item,i){

						     	if(item==='C++'){
						     		_cPlusPlus = arrCont[0]++;
						     	}
						     	if(item==='JAVA'){
						     		_java =  arrCont[1]++;
						     	}
						     	if(item==='JAVASCRIPT'){
						     		_javaScript = arrCont[2]++;
						     	}
						     	if(item==='RUBY'){
						     		_ruby = arrCont[3]++;
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
						     	if(item==='C#'){
						     		_cSharp = arrCont[8]++;
						     	}
						     	if(item==='COBOL'){
						     		_cobol = arrCont[9]++;
						     	}
						     	if(item==='GO'){
						     		_go = arrCont[10]++;
						     	}
						     })
						}
				}

				var ranking={_numOffers:[{name:"c++",num:_cPlusPlus},{name:"java",num:_java},{name:"javaScript",num:_javaScript},
							  {name:"ruby",num:_ruby},{name:"python",num:_python},{name:"angular",num:_angular},
							  {name:"php",num:_php},{name:"net",num:_NET},{cSharp:_cSharp},
							  {name:"cobol",num:_cobol},{name:"go",num:_go}]}


				    insertTasks(db, ranking,function( data ) {
        		    		db.close();
		          	});

					ranking._numOffers = ranking._numOffers.sort(function(obj1,obj2){ 

							 for(var prop in obj1) {
							  prop1=prop;
							 }
							 for(var prop in obj2) {
							  prop2=prop;
							 }
						 	return obj2[prop2]-obj1[prop1];
						});

					console.log(ranking);

				var total =   ranking._numOffers[0].num+ranking._numOffers[1].num
							 +ranking._numOffers[2].num+ranking._numOffers[3].num
							 +ranking._numOffers[4].num;

				var firstPercent = tantPercent(ranking._numOffers[0].num,total);
				var secondPercent = tantPercent(ranking._numOffers[1].num,total);
				var thirdPercent = tantPercent(ranking._numOffers[2].num,total);
				var fourPercent = tantPercent(ranking._numOffers[3].num,total);
				var fivePercent = tantPercent(ranking._numOffers[4].num,total);

				function  tantPercent(num,total){
					var perCent = ((num/total)*100).toFixed(2);
					return perCent;
				}

				var posRanking = {positionOne:firstPercent,
							  	  positionTwo:secondPercent,
				 			      positionThree:thirdPercent,
				 			      positionFour:fourPercent,
				 			  	  positionFive:fivePercent}

				 insertTasks(db, posRanking,function( data ) {
        		    db.close();
		          });

				res.json(o);
				console.log(posRanking );
	});


}

module.exports = offersMethodTwo;

function insertTasks(db,posRanking, callback) {
  // Get the documents collection
  var collection = db.collection('offers');

  // Find some documents
  collection.insert(posRanking);

}
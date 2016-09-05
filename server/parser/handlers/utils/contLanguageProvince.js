function getNumLanguagesProvince(ranking,itemSkill,provin){

	// console.log(province);
	// console.log(ranking[province]);
	var provinLang=provin+'Languages';
	//console.log(provinLang);
	ranking.provinces.forEach(function(itemName,i){
		//console.log(itemName.province);
		if(provin===itemName.province){
			//console.log(itemName[provin]);
			itemName[provinLang].forEach(function(itemName,i){

				if(itemSkill==='C++' && itemName.name ==="C++"){
					itemName.num++;
				}
				if(itemSkill==='JAVA' && itemName.name ==="Java"){
					itemName.num++;
				}
				if(itemSkill==='JAVASCRIPT' && itemName.name ==="JavaScript"){
					itemName.num++;
				}
				if(itemSkill==='C#' && itemName.name ==="C#"){
					itemName.num++;
				}
				if(itemSkill==='PYTHON' && itemName.name ==="Python"){
					itemName.num++;
				}
				if(itemSkill==='SCALA' && itemName.name ==="Scala"){
					itemName.num++;
				}
				if(itemSkill==='PHP' && itemName.name ==="PHP"){
					itemName.num++;
				}
				if(itemSkill==='PERL' && itemName.name ==="Perl"){
					itemName.num++;
				}
				if(itemSkill==='C' && itemName.name ==="C"){
					itemName.num++;
				}
				if(itemSkill==='COBOL' && itemName.name ==="Cobol"){
					itemName.num++;
				}
				if(itemSkill==='GO' && itemName.name ==="Go"){
					itemName.num++;
				}
			});
		}
	});
// if(province===ranking[province]){
// 	var itemNum = ranking[province].forEach(function(itemName,i){

// 		if(itemSkill==='C++' && itemName.name ==="C++"){
// 			itemName.num++;
// 		}
// 		if(itemSkill==='JAVA' && itemName.name ==="Java"){
// 			itemName.num++;
// 		}
// 		if(itemSkill==='JAVASCRIPT' && itemName.name ==="JavaScript"){
// 			itemName.num++;
// 		}
// 		if(itemSkill==='C#' && itemName.name ==="C#"){
// 			itemName.num++;
// 		}
// 		if(itemSkill==='PYTHON' && itemName.name ==="Python"){
// 			itemName.num++;
// 		}
// 		if(itemSkill==='ANGULAR' || itemSkill==='ANGULARJS' && itemName.name ==="Angular"){
// 			itemName.num++;
// 		}
// 		if(itemSkill==='PHP' && itemName.name ==="PHP"){
// 			itemName.num++;
// 		}
// 		if(itemSkill==='NET' && itemName.name ==="Net"){
// 			itemName.num++;
// 		}
// 		if(itemSkill==='C' && itemName.name ==="C"){
// 			itemName.num++;
// 		}
// 		if(itemSkill==='COBOL' && itemName.name ==="Cobol"){
// 			itemName.num++;
// 		}
// 		if(itemSkill==='GO' && itemName.name ==="Go"){
// 			itemName.num++;
// 		}

// 		return itemName.num;

// 	});

// 	return itemNum;
// 	}

}

module.exports = getNumLanguagesProvince;
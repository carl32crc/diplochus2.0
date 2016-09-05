function getNumLanguagesProvince(ranking,itemSkill,provin){

	var provinLang=provin+'Languages';

	ranking.forEach(function(itemName,i){

		if(provin===itemName.province){

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

}

module.exports = getNumLanguagesProvince;
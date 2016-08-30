function getNumLanguagesProgramming(item,ranking,index2,subItem){

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

	return ranking[index2][subItem].num;
}

module.exports = getNumLanguagesProgramming;
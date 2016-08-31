function resetParams(ranking){

	for(var item in ranking){
				for(var subItem in ranking[item]){
					if(typeof(ranking[item][subItem])==='string'){
						ranking[item][subItem] = 0;
					}
					ranking[item][subItem].num = 0;
				}
			}
}

module.exports = resetParams;
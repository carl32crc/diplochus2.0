function getFirsFivePosition(firstFivePos,ranking){

	var total = ranking[0].num+ranking[1].num+ranking[2].num+ranking[3].num+ranking[4].num;

	firstFivePos.positionOne = tantPercent(ranking[0].num,total);
	firstFivePos.positionTwo = tantPercent(ranking[1].num,total);
	firstFivePos.positionThree = tantPercent(ranking[2].num,total);
	firstFivePos.positionFour = tantPercent(ranking[3].num,total);
	firstFivePos.positionFive = tantPercent(ranking[4].num,total);

}

function tantPercent(num,total){
		var perCent = ((num/total)*100).toFixed(2);
		return perCent;
}

module.exports = getFirsFivePosition;
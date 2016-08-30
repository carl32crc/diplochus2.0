function getFirsFivePosition(firstFivePos,ranking){

	var total = ranking._numOffers[0].num+ranking._numOffers[1].num+ranking._numOffers[2].num+ranking._numOffers[3].num+ranking._numOffers[4].num;

	firstFivePos.positionOne = tantPercent(ranking._numOffers[0].num,total);
	firstFivePos.positionTwo = tantPercent(ranking._numOffers[1].num,total);
	firstFivePos.positionThree = tantPercent(ranking._numOffers[2].num,total);
	firstFivePos.positionFour = tantPercent(ranking._numOffers[3].num,total);
	firstFivePos.positionFive = tantPercent(ranking._numOffers[4].num,total);

}

function tantPercent(num,total){
		var perCent = ((num/total)*100).toFixed(2);
		return perCent;
}

module.exports = getFirsFivePosition;
function  orderDescendingData(ranking){

	var rankingOrder = ranking._numOffers.sort(function(obj1,obj2){

						for(var property in obj1) {
							prop1=property;
						}
						for(property in obj2) {
							prop2=property;
						}
						return obj2[prop2]-obj1[prop1];
					});

		return rankingOrder;
}

module.exports = orderDescendingData;
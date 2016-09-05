angular.module("myChartCreate")
	.factory('getDataAndRender', function () {

		function getDataRanking(data){
				var pos1=parseFloat(data.positionOne);
				var pos2=parseFloat(data.positionTwo);
				var pos3=parseFloat(data.positionThree);
				var pos4=parseFloat(data.positionFour);
				var pos5=parseFloat(data.positionFive);

				values = [[pos1],[pos2],[pos3],[pos4],[pos5]];

			return values;
		}

		return{
			getDataRanking : getDataRanking
		};
});
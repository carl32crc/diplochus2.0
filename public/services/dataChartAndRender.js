angular.module("myChartCreate")
	.factory('getDataAndRender', function () {

		function getDataRankingLanguages(data){
				var pos1=parseFloat(data[2].positionOne);
				var pos2=parseFloat(data[2].positionTwo);
				var pos3=parseFloat(data[2].positionThree);
				var pos4=parseFloat(data[2].positionFour);
				var pos5=parseFloat(data[2].positionFive);

				valuesOfFrontEnd = [[pos5],[pos4],[pos2],[pos1],[pos3]];

			return valuesOfFrontEnd;
		}

		function getDataRankingDb(data){
				var pos1Db=parseFloat(data[3].positionOne);
				var pos2Db=parseFloat(data[3].positionTwo);
				var pos3Db=parseFloat(data[3].positionThree);
				var pos4Db=parseFloat(data[3].positionFour);
				var pos5Db=parseFloat(data[3].positionFive);

				valuesOfDataBase = [[pos2Db],[pos1Db],[pos3Db],[pos4Db],[pos5Db]];

			return valuesOfDataBase;
		}

		return{
			getDataRankingLanguages : getDataRankingLanguages,
			getDataRankingDb : getDataRankingDb
		};
});
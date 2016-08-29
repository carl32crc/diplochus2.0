angular.module("myChartCreate")
	.factory('chartcreate', function ($scope) {

		function getDataRankingLanguages(data){
				var pos1=parseFloat(data[2].positionOne);
				var pos2=parseFloat(data[2].positionTwo);
				var pos3=parseFloat(data[2].positionThree);
				var pos4=parseFloat(data[2].positionFour);
				var pos5=parseFloat(data[2].positionFive);

				$scope.valuesOfFrontEnd = [[pos5],[pos4],[pos2],[pos1],[pos3]];

			return $scope.valuesOfFrontEnd;
		}

		function getDataRankingDb(data){
				var pos1Db=parseFloat(data[3].positionOne);
				var pos2Db=parseFloat(data[3].positionTwo);
				var pos3Db=parseFloat(data[3].positionThree);
				var pos4Db=parseFloat(data[3].positionFour);
				var pos5Db=parseFloat(data[3].positionFive);

				$scope.valuesOfDataBase = [[pos2Db],[pos1Db],[pos3Db],[pos4Db],[pos5Db]];

			return $scope.valuesOfDataBase;
		}

		return{
			getDataRankingLanguages : getDataRankingLanguages,
			getDataRankingDb : getDataRankingDb
		};
});
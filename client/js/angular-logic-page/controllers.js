angular.module("myAppControllers", ['zingchart-angularjs'])
	.controller("pieStatistics", function( $rootScope,$scope,$http,getDataAndRender,createObjectChart) {

		$rootScope.section ="pieStatistics";

		$http.get('/offers')
			.success(function(data) {

				$scope.rankingAll=data[0]._offersLanguage;
				$scope.rankingAllDb=data[0]._offersBackEnd;

				$scope.valuesOfFrontEnd = getDataAndRender.getDataRankingLanguages(data);
				$scope.valuesOfDataBase = getDataAndRender.getDataRankingDb(data);

				$scope.dataConfig = createObjectChart.crateChartForLanguages(data);
				$scope.dataConfigDb = createObjectChart.crateChartForBackEnd(data);

		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

});
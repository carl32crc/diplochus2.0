angular.module("homeModule", ['zingchart-angularjs'])
	.controller("pieStatistics", function( $rootScope,$scope,$http,getDataAndRender,createObjectChart) {

		$rootScope.section ="pieStatistics";

		$http.get('/offers')
			.success(function(data) {

				$scope.rankingAll=data[0]._offersLanguage;
				$scope.rankingAllDb=data[0]._offersBackEnd;
				$scope.rankingFrameworks=data[0]._frameworks;
				$scope.rankingOtherSkills=data[0]._othersskills;

				$scope.valuesOfFrontEnd = getDataAndRender.getDataRankingLanguages(data);
				$scope.valuesOfDataBase = getDataAndRender.getDataRankingDb(data);
				$scope.valuesOfFramework = getDataAndRender.getDataRankingFrameworks(data);
				$scope.valuesOfOther = getDataAndRender.getDataRankingOtherSkills(data);

				$scope.dataConfig = createObjectChart.crateChartForLanguages(data);
				$scope.dataConfigDb = createObjectChart.crateChartForBackEnd(data);
				$scope.dataOther = createObjectChart.crateChartForOtherSkills(data);
				$scope.dataFrameworks = createObjectChart.crateChartForFrameworks(data);



		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

});
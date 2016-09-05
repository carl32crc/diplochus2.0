angular.module("homeModule", ['zingchart-angularjs'])
	.controller("pieStatistics", function( $rootScope,$scope,$http,getDataAndRender,createObjectChart) {

		$rootScope.section ="pieStatistics";

		$http.get('/offers')
			.success(function(data) {

				console.log(data);

				$scope.rankingAll         = data[0]._offersLanguage;
				$scope.rankingAllDb       = data[0]._offersBackEnd;
				$scope.rankingFrameworks  = data[0]._frameworks;
				$scope.rankingOtherSkills = data[0]._othersskills;

				$scope.valuesOfFrontEnd   = getDataAndRender.getDataRanking(data[0]._fivePosLang);
				$scope.valuesOfDataBase   = getDataAndRender.getDataRanking(data[0]._fivePosBack);
				$scope.valuesOfFramework  = getDataAndRender.getDataRanking(data[0]._fivePosFrameworks);
				$scope.valuesOfOther      = getDataAndRender.getDataRanking(data[0]._fivePosOtherSkills);

				$scope.dataConfig         = createObjectChart.crateChart(data[0]._offersLanguage,'Programming Languages');
				$scope.dataConfigDb       = createObjectChart.crateChart(data[0]._offersBackEnd,'Data Base');
				$scope.dataOther          = createObjectChart.crateChart(data[0]._othersskills,'Frameworks');
				$scope.dataFrameworks     = createObjectChart.crateChart(data[0]._frameworks,'Other Skills');
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

});
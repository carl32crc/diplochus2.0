angular.module("homeModule", [])
	.controller("pieStatistics", function( $rootScope,$scope,$http,createObjectChartJs) {

		$rootScope.section ="pieStatistics";

		$http.get('/offers')
			.success(function(data) {

				createObjectChartJs.crateChartJs(data[0]._offersLanguage,'Programming Languages',data[0]._fivePosLang,'chart-area');
				createObjectChartJs.crateChartJs(data[0]._offersBackEnd,'Data Base',data[0]._fivePosBack,'chart-area2');
				createObjectChartJs.crateChartJs(data[0]._frameworks,'Frameworks',data[0]._fivePosFrameworks,'chart-area3');
				createObjectChartJs.crateChartJs(data[0]._othersskills,'Frameworks',data[0]._fivePosOtherSkills,'chart-area4');


				$scope.rankingAll         = data[0]._offersLanguage;
				$scope.rankingAllDb       = data[0]._offersBackEnd;
				$scope.rankingFrameworks  = data[0]._frameworks;
				$scope.rankingOtherSkills = data[0]._othersskills;

		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

});
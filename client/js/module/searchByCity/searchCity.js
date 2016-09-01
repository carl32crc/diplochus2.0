angular.module("searchCityModule", ['zingchart-angularjs'])
	.controller("cityStatistics", function( $rootScope,$scope,$http) {

		$rootScope.section ="cityStatistics";

		$http.get('/search-city')
			.success(function(data) {

				//console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

});
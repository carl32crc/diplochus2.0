angular.module("searchProvinceModule", ['zingchart-angularjs'])
	.controller("provinceStatistics", function( $rootScope,$scope,$http) {

		$rootScope.section ="provinceStatistics";

		$http.get('/search-province')
			.success(function(data) {

				console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

});
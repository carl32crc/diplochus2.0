angular.module("routeSearchProvince",[])
	.config(function( $routeProvider ){

			$routeProvider
				.when('/search-province',{
					templateUrl: 'js/module/searchByCity/search-province.html',
					controller: 'provinceStatistics'
				});

	});
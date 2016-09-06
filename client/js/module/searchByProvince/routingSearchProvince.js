angular.module("routeSearchProvince",[])
	.config(function( $routeProvider ){

			$routeProvider
				.when('/search-province/:province',{
					templateUrl: 'js/module/searchByProvince/search-province.html',
					controller: 'provinceStatistics'
				});

	});
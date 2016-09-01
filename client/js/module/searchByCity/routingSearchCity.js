angular.module("routeSearchCity",[])
	.config(function( $routeProvider ){

			$routeProvider
				.when('/search-city',{
					templateUrl: 'js/module/searchByCity/search-city.html',
					controller: 'cityStatistics'
				});

	});
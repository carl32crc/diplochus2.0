angular.module("routeHome",[])
	.config(function( $routeProvider ){

			$routeProvider
				.when('/offers',{
					templateUrl: 'js/module/home/offers.html',
					controller: 'pieStatistics'
				})

				.otherwise({ redirectTo: '/offers' });

	});
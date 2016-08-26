angular.module("myAppConfig",[])
	.config(function( $routeProvider ){

			$routeProvider
				.when('/offers',{
					templateUrl: '/offers.jade',
					controller: 'pieStatisticsController'
				})

				.otherwise({ redirectTo: '/' });

	})
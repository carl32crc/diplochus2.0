angular.module("myAppConfig",[])
	.config(function( $routeProvider ){

			$routeProvider
				.when('/offers',{
					templateUrl: '../offers.html',
					controller: 'pieStatistics'
				})

				.otherwise({ redirectTo: '/offers' });

	})
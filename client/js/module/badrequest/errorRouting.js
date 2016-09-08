angular.module("routeError",[])
	.config(function( $routeProvider ){

			$routeProvider
				.when('/error-bad-request',{
					templateUrl: 'js/module/badrequest/error.html',
					controller: 'errorState'
				});

	});

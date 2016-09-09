angular.module("errorModule", [])
	.controller("errorState", function( $rootScope) {

		$rootScope.errorMessage ="This dosn't exist...";
		$rootScope.emoji = "¯\\(°_o)/¯";

});
angular.module("searchModule",[])
	.controller("searchAll", function( $rootScope,$scope,$http,$location) {


		$scope.submit = function () {
				$location.path('/search-province/'+$scope.provinceSearch);
				$rootScope.$broadcast('search', $scope.provinceSearch);
		};

});
angular.module("searchProvinceModule", ['zingchart-angularjs'])
	.controller("provinceStatistics", function( $rootScope,$scope,$http,$routeParams,provinceService) {

			var province = $routeParams.province;

				provinceService.getProvince(province)
					.success(function(data) {
							console.log(data[0]);
							if(data[0]===undefined){
								$rootScope.province ="This don't exist";
							}else{
								$rootScope.province = province;
								console.log(data);
							}
					})
					.error(function(data) {
						console.log('Error: ' + data);
					});
	});
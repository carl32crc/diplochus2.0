angular.module("searchProvinceModule", [])
	.controller("provinceStatistics", function( $rootScope,$scope,$http,$routeParams,provinceService) {

			var province = $routeParams.province;

				provinceService.getProvince(province)
					.success(function(data) {
							console.log(data[0]);
							if(data[0]===undefined){
								$rootScope.province ="This not exist.";
								$rootScope.emoji = "¯\\(°_o)/¯";
							}else{
								$rootScope.province = province;
								$rootScope.emoji = "";
								console.log(data);
							}
					})
					.error(function(data) {
						console.log('Error: ' + data);
					});
	});
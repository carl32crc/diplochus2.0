angular.module("searchProvinceModule", [])
	.controller("provinceStatistics", function( $rootScope,$scope,$http,$routeParams,$window,provinceService,createObjectChartJs) {

			var province = $routeParams.province.toLowerCase();

				provinceService.getProvince(province)
					.success(function(data) {
							if(data[0]===undefined){
								$window.location = "/#/error-bad-request";
							}else{
								$rootScope.province = province;
								$rootScope.emoji = "";
								var nameLanguages = $rootScope.province+"Languages";
								var nameDb = $rootScope.province+"Db";
								var nameFrames = $rootScope.province +"Frames";
								var nameOther=$rootScope.province +"Others";
								console.log(data[0][nameLanguages][0].num);

								createObjectChartJs.orderDescendingData(data[0][nameLanguages]);
								createObjectChartJs.orderDescendingData(data[0][nameDb]);
								createObjectChartJs.orderDescendingData(data[0][nameFrames]);
								createObjectChartJs.orderDescendingData(data[0][nameOther]);



								var prLang = createObjectChartJs.positionProvince(data[0][nameLanguages]);
								var prDb = createObjectChartJs.positionProvince(data[0][nameDb]);
								var prFrame = createObjectChartJs.positionProvince(data[0][nameFrames]);
								var prOther = createObjectChartJs.positionProvince(data[0][nameOther]);

								createObjectChartJs.getFirsFivePosition(prLang,data[0][nameLanguages]);
								createObjectChartJs.getFirsFivePosition(prDb,data[0][nameDb]);
								createObjectChartJs.getFirsFivePosition(prFrame,data[0][nameFrames]);
								createObjectChartJs.getFirsFivePosition(prOther,data[0][nameOther]);

								createObjectChartJs.crateChartJs(data[0][nameLanguages],'Programming Languages',prLang,'chart-area5');
								createObjectChartJs.crateChartJs(data[0][nameDb],'Programming Languages',prDb,'chart-area6');
								createObjectChartJs.crateChartJs(data[0][nameFrames],'Programming Languages',prFrame,'chart-area7');
								createObjectChartJs.crateChartJs(data[0][nameOther],'Programming Languages',prOther,'chart-area8');

								$scope.rankingAll         = data[0][nameLanguages];
								$scope.rankingAllDb       = data[0][nameDb];
								$scope.rankingFrameworks  = data[0][nameFrames];
								$scope.rankingOtherSkills = data[0][nameOther];
							}
					})
					.error(function(data) {
						console.log('Error: ' + data);
					});
	});
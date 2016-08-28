angular.module("myAppControllers", ['zingchart-angularjs'])
	.controller("pieStatistics", function( $rootScope,$scope,$http,$q) {

		$rootScope.section ="pieStatistics";
		 var obj = {};

		 $http.get('/offers')
	        .success(function(data) {
	        	console.log(data);
	        	var pos1=parseFloat(data[2].positionOne);
	        	var pos2=parseFloat(data[2].positionTwo);
	        	var pos3=parseFloat(data[2].positionThree);
	        	var pos4=parseFloat(data[2].positionFour);
	        	var pos5=parseFloat(data[2].positionFive);
	        	var pos1Db=parseFloat(data[3].positionOne);
	        	var pos2Db=parseFloat(data[3].positionTwo);
	        	var pos3Db=parseFloat(data[3].positionThree);
	        	var pos4Db=parseFloat(data[3].positionFour);
	        	var pos5Db=parseFloat(data[3].positionFive);
	        	console.log(pos1);
	        	console.log(pos2);
	        	console.log(pos3);
	        	console.log(pos4);
	        	console.log(pos5);
	        	$scope.rankingAll=data[0]._numOffers;
	        	$scope.rankingAllDb=data[1]._numOffers;

	        	console.log($scope.rankingAll);
	        	console.log($scope.rankingAllDb);

	            $scope.valuesOfFrontEnd = [[pos5],[pos4],[pos2],[pos1],[pos3]];
	            $scope.valuesOfDataBase = [[pos2Db],[pos1Db],[pos3Db],[pos4Db],[pos5Db]];

				 $scope.dataConfig = {
	            		type:"pie",
	            		backgroundColor: "#2B313B",
	            		plot: {
					 	  borderColor: "#2B313B",
					 	  borderWidth: 5,
					 	  slice: 60,
					 	  valueBox: {
					 	    placement: 'out',
					 	    text: '%t\n%npv%',
					 	    fontFamily: "Open Sans"
					 	  },
					 	  tooltip:{
					 	    fontSize: '18',
					 	    fontFamily: "Open Sans",
					 	    padding: "5 10",
					 	    text: "%npv%"
					 	  },
					 	  animation:{
					      effect: 2,
					      method: 5,
					      speed: 500,
					      sequence: 1
					    }
					 	},
					 title: {
				 	  fontColor: "#fff",
				 	  text: 'Programming Languages',
				 	  align: "center",
				 	  offsetX: 10,
				 	  fontFamily: "Open Sans",
				 	  fontSize: 20
				 	},
				 	subtitle: {
				 	  offsetX: 10,
				 	  offsetY: 10,
				 	  fontColor: "#8e99a9",
				 	  fontFamily: "Open Sans",
				 	  fontSize: "12",
				 	  text: 'Skills with more demand in 2016',
				 	  align: "center"
				 	},
				 	plotarea: {
				 	  margin: "20 0 0 0"
				 	},
					 	series : [
								{
								  text:data[0]._numOffers[4].name,
								  backgroundColor: '#FF7965'
								},
								{
								  text:data[0]._numOffers[3].name,
								  backgroundColor: '#50ADF5'
								},
								{
								  text:data[0]._numOffers[1].name,
								  backgroundColor: '#6FB07F'
								},
								{
								  text:data[0]._numOffers[0].name,
								  backgroundColor: '#6877e5'
								},
								{
								  text:data[0]._numOffers[2].name,
								  backgroundColor: '#FFCB45'
								}
							]
	            };
	            $scope.myRender = {
	                type : "canvas",
	                data : $scope.dataConfig
	            };

	            $scope.dataConfigDb = {
	            		type:"pie",
	            		backgroundColor: "#2B313B",
	            		plot: {
					 	  borderColor: "#2B313B",
					 	  borderWidth: 5,
					 	  slice: 60,
					 	  valueBox: {
					 	    placement: 'out',
					 	    text: '%t\n%npv%',
					 	    fontFamily: "Open Sans"
					 	  },
					 	  tooltip:{
					 	    fontSize: '18',
					 	    fontFamily: "Open Sans",
					 	    padding: "5 10",
					 	    text: "%npv%"
					 	  },
					 	  animation:{
					      effect: 2,
					      method: 5,
					      speed: 500,
					      sequence: 1
					    }
					 	},
					 title: {
				 	  fontColor: "#fff",
				 	  text: 'Back End',
				 	  align: "center",
				 	  offsetX: 10,
				 	  fontFamily: "Open Sans",
				 	  fontSize: 20
				 	},
				 	subtitle: {
				 	  offsetX: 10,
				 	  offsetY: 10,
				 	  fontColor: "#8e99a9",
				 	  fontFamily: "Open Sans",
				 	  fontSize: "12",
				 	  text: 'Skills with more demand in 2016',
				 	  align: "center"
				 	},
				 	plotarea: {
				 	  margin: "20 0 0 0"
				 	},
					 	series : [
								{
								  text:data[1]._numOffers[1].name,
								  backgroundColor: '#50ADF5'
								},
								{
								  text:data[1]._numOffers[0].name,
								  backgroundColor: '#6FB07F'
								},
								{
								  text:data[1]._numOffers[2].name,
								  backgroundColor: '#FFCB45'
								},
								{
								  text:data[1]._numOffers[3].name,
								  backgroundColor: '#6877e5'
								},
								{
								  text:data[1]._numOffers[4].name,
								  backgroundColor: '#FF7965'
								}
							]
	            };
	            $scope.myRenderDb = {
	                type : "canvas",
	                data : $scope.dataConfigDb
	            };
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

})
angular.module("myAppControllers", ['zingchart-angularjs'])
	.controller("pieStatistics", function( $rootScope,$scope,$http,$q) {

		$rootScope.section ="pieStatistics";
		 var obj = {};

		 $http.get('/offers')
	        .success(function(data) {
	        	console.log(data);
	        	var pos1=parseInt(data[2].positionOne);
	        	var pos2=parseInt(data[2].positionTwo);
	        	var pos3=parseInt(data[2].positionThree);
	        	var pos4=parseInt(data[2].positionFour);
	        	var pos5=parseInt(data[2].positionFive);
	        	var pos1Db=parseInt(data[3].positionOne);
	        	var pos2Db=parseInt(data[3].positionTwo);
	        	var pos3Db=parseInt(data[3].positionThree);
	        	var pos4Db=parseInt(data[3].positionFour);
	        	var pos5Db=parseInt(data[3].positionFive);


	            $scope.valuesOfFrontEnd = [[pos1],[pos2],[pos3],[pos4],[pos5]];
	            $scope.valuesOfDataBase = [[pos1Db],[pos2Db],[pos3Db],[pos4Db],[pos5Db]];

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
				 	  align: "left",
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
				 	  align: "left"
				 	},
				 	plotarea: {
				 	  margin: "20 0 0 0"
				 	},
					 	series : [
								{
								  text:data[0]._numOffers[0].name,
								  backgroundColor: '#50ADF5'
								},
								{
								  text:data[0]._numOffers[1].name,
								  backgroundColor: '#FF7965'
								},
								{
								  text:data[0]._numOffers[2].name,
								  backgroundColor: '#FFCB45'
								},
								{
								  text:data[0]._numOffers[3].name,
								  backgroundColor: '#6877e5'
								},
								{
								  text:data[0]._numOffers[4].name,
								  backgroundColor: '#6FB07F'
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
				 	  text: 'Data Base',
				 	  align: "left",
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
				 	  align: "left"
				 	},
				 	plotarea: {
				 	  margin: "20 0 0 0"
				 	},
					 	series : [
								{
								  text:data[1]._numOffers[0].name,
								  backgroundColor: '#50ADF5'
								},
								{
								  text:data[1]._numOffers[1].name,
								  backgroundColor: '#FF7965'
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
								  backgroundColor: '#6FB07F'
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
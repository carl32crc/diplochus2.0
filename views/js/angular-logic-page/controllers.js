angular.module("myAppControllers", ['ngRoute','zingchart-angularjs'])
	.controller("pieStatisticsController", function( $rootScope,$scope,$http,offerService ) {

		$rootScope.section ="pieStatisticsController";

				 $http.get('/offers')
			        .success(function(data) {
			            $scope.todos = data;
			            console.log(data)
			        })
			        .error(function(data) {
			            console.log('Error: ' + data);
			        });

			$scope.valuesOfFrontEnd = [[10],[20],[30],[30],[10]];
            $scope.dataConfig = {
            		type:"pie",
            		backgroundColor: "#2B313B",
            		plot: {
				 	  borderColor: "#2B313B",
				 	  borderWidth: 5,
				 	  slice: 90,
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
			 	  text: 'Front End',
			 	  align: "left",
			 	  offsetX: 10,
			 	  fontFamily: "Open Sans",
			 	  fontSize: 25
			 	},
			 	subtitle: {
			 	  offsetX: 10,
			 	  offsetY: 10,
			 	  fontColor: "#8e99a9",
			 	  fontFamily: "Open Sans",
			 	  fontSize: "16",
			 	  text: 'Skills with more demand in 2016',
			 	  align: "left"
			 	},
			 	plotarea: {
			 	  margin: "20 0 0 0"
			 	},
				 	series : [
							{
							  text: "AngularJS",
							  backgroundColor: '#50ADF5',
							},
							{
							  text: "JavaScript",
							  backgroundColor: '#FF7965'
							},
							{
							  text: 'C#',
							  backgroundColor: '#FFCB45'
							},
							{
							  text: 'Python',
							  backgroundColor: '#6877e5'
							},
							{
							  text: 'Other',
							  backgroundColor: '#6FB07F'
							}
						]
            };
            $scope.myRender = {
                type : "canvas",
                data : $scope.dataConfig,
                height: 500,
				width: 725
            };

	})
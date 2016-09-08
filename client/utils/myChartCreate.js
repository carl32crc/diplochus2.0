angular.module("myChartCreate")
	.factory('createObjectChartJs', function () {

		function crateChartJs(data,title,value,chart){

			var config = {
				type: 'bar',
				data: {
					datasets: [{
					data: [
					value.positionOne,
					value.positionTwo,
					value.positionThree,
					value.positionFour,
					value.positionFive,
				],
				backgroundColor: [
					"#FF7965",
					"#50ADF5",
					"#6FB07F",
					"#6877e5",
					"#FFCB45",
				],
					label: 'Expenditures'
				}],
				labels: [
					data[0].name,
					data[1].name,
					data[2].name,
					data[3].name,
					data[4].name
					]
				},
				options: {
					scales : {
						xAxes : [ {
							gridLines : {
								display : false
							}
						}],
						yAxes : [ {
							gridLines : {
								display : false
							}
						}]
					},
					responsive: true,
					legend: {
					position: 'bottom'
				},
				title: {
					display: false,
					text: title
				},
				animation: {
					animateScale: true,
					animateRotate: true
				},
				tooltips: {
					callbacks: {
						label: function(tooltipItem, data) {

								var dataset = data.datasets[tooltipItem.datasetIndex];
								var label = data.labels[tooltipItem.index];

								var currentValue = dataset.data[tooltipItem.index];

								return currentValue + "%";
							}
						}
					}
				}
			};

		var ctx = document.getElementById(chart).getContext("2d");
		window.myDoughnut = new Chart(ctx, config); {}

		}

		return{
			crateChartJs : crateChartJs
		};
});
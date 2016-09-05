angular.module("myChartCreate")
	.factory('createObjectChart', function () {

		function crateChart(data,title){

				var chart = {
					type:"pie",
					backgroundColor: "#2B313B",
					plot:{
						borderColor:"#2B313B",
						borderWidth:5,
						slice:60,
						valueBox:{
						placement:'out',
						text:'%t\n%npv%',
						fontFamily:"Open Sans"
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
						text: title,
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
						align: "center"
					},
					plotarea: {
						margin: "20 0 0 0"
					},
						series : [
								{
									text:data[0].name,
									backgroundColor: '#FF7965'
								},
								{
									text:data[1].name,
									backgroundColor: '#50ADF5'
								},
								{
									text:data[2].name,
									backgroundColor: '#6FB07F'
								},
								{
									text:data[3].name,
									backgroundColor: '#6877e5'
								},
								{
									text:data[4].name,
									backgroundColor: '#FFCB45'
								}
							]
					};

			return chart;
		}

		return{
			crateChart : crateChart
		};
});
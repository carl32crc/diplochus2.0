angular.module("myChartCreate")
	.factory('createObjectChart', function () {

		function crateChartForLanguages(data){

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
									text:data[0]._offersLanguage[4].name,
									backgroundColor: '#FF7965'
								},
								{
									text:data[0]._offersLanguage[3].name,
									backgroundColor: '#50ADF5'
								},
								{
									text:data[0]._offersLanguage[1].name,
									backgroundColor: '#6FB07F'
								},
								{
									text:data[0]._offersLanguage[0].name,
									backgroundColor: '#6877e5'
								},
								{
									text:data[0]._offersLanguage[2].name,
									backgroundColor: '#FFCB45'
								}
							]
					};

			return chart;
		}

		function crateChartForBackEnd(data){

			var chart = {
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
									text:data[0]._offersBackEnd[1].name,
									backgroundColor: '#50ADF5'
								},
								{
									text:data[0]._offersBackEnd[0].name,
									backgroundColor: '#6FB07F'
								},
								{
									text:data[0]._offersBackEnd[2].name,
									backgroundColor: '#FFCB45'
								},
								{
									text:data[0]._offersBackEnd[3].name,
									backgroundColor: '#6877e5'
								},
								{
									text:data[0]._offersBackEnd[4].name,
									backgroundColor: '#FF7965'
								}
							]
				};

			return chart;
		}


		return{
			crateChartForLanguages : crateChartForLanguages,
			crateChartForBackEnd : crateChartForBackEnd
		};
});
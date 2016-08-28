'use strict';
angular
  .module( 'app.doughnut', [] )
  .controller( 'DoughnutCtrl', function ( $scope ) {

    $scope.data = {
      backgroundColor: "#F5DEB3",
      datasets: [{
        data: [
          10,
          10,
          30,
          40,
          10
        ],
        backgroundColor: [
          "#F7464A",
          "#46BFBD",
          "#FDB45C",
          "#46BFBD",
          "#FDB45C"
        ]
      }],
      labels: [
        "Java",
        ".Net",
        "JavaScript",
        "PHP",
        "AngularJs"
      ]
    };

    $scope.options =  {
      tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              //get the concerned dataset
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var labels = data.labels[tooltipItem.index];
              var currentValue = dataset.data[tooltipItem.index];
              return labels+" : "+currentValue + "%";
            }
          }
        },
      legend: {
        display: false
      },
          legendCallback: function(chart) {
            console.log(chart);
            var text = [];
            for (var i = 0; i < chart.data.datasets.length; i++) {
              var dataset = chart.data.datasets[i];
              text.push('<ul class="tc-chart-js-legend">');
              for (var j = 0; j < dataset.data.length; j++) {
                text.push('<li><span style="background-color:' + dataset.backgroundColor[j] + '"></span>');
                text.push(chart.data.labels[j]);
                text.push('</li>');
              }
              text.push('</ul>');
            }
        return text.join("");
      }
    };

  });
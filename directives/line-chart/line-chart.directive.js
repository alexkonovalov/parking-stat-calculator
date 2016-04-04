'use strict';

var Plotly = require('plotly.js/dist/plotly.js');

function lineChart(_) {
    return {
        restrict: 'A',
        replace: false,
        scope: {
            xAxis: '=lineChartXCoords',
            yAxis: '=lineChartYCoords'
            /* requires data in this format  [
             {start: '12:12', end: '23:23', q: 0},
             {start: '23:25', end: '23:56', q: 2}
             ]*/

        },
        template: require('./line-chart.template.html'),
        link:  function (scope, element) {

          /* accepts*/

  /*

*/

            scope.$watch(function(scope) { return scope.xAxis; }, function(newVal){
                drawChart(newVal, scope.yAxis);
            });

            scope.$watch(function(scope) {return scope.yAxis; }, function(newVal){
                drawChart(scope.xAxis, newVal);
            });

            function drawChart(xAxis, yAxis){

                var trace = {
                    x: xAxis,  //xCoords/*['0.3', '1', '3', '4', '24']*/,
                    y: yAxis, //yCoords/*[26, 28, 27, 28, 26]*/,
                    mode: 'lines+markers',
                    line: {shape: 'hv'},
                    type: 'scatter'
                };


                var data = [trace];

                var layout = {legend: {
                    y: 0.5,
                    traceorder: 'reversed',
                    font: {size: 16},
                    yref: 'paper'
                }};

                Plotly.newPlot('myDiv', data, layout);
            }


        }
    };

};

module.exports = function(ngModule) {
    ngModule.directive('lineChart', lineChart);
}

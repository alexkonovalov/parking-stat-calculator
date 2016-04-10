'use strict';

var Plotly = require('plotly.js/dist/plotly.js');

function lineChart(_) {
    return {
        restrict: 'A',
        replace: false,
        scope: {
            xAxis: '=lineChartXCoords',
            yAxis: '=lineChartYCoords'
        },
        template: require('./line-chart.template.html'),
        link:  function (scope, element) {

            scope.$watch(function(scope) { return scope.xAxis; }, function(newVal){
                drawChart(newVal, scope.yAxis);
            });

            scope.$watch(function(scope) {return scope.yAxis; }, function(newVal){
                drawChart(scope.xAxis, newVal);
            });

            function drawChart(xAxis, yAxis){

                var trace = {
                    x: xAxis,
                    y: yAxis,
                    mode: 'lines+markers',
                    line: {shape: 'hv'},
                    type: 'scatter'
                };


                var data = [trace];

                var layout = {
                    title:"Parking Statistics Of the Day",
                    autosize:false,
                    yaxis:{
                        zeroline:false,
                        showline:true,
                        range:[
                            0
                        ],
                        showgrid:false,
                        gridcolor:"rgb(204, 204, 204)"

                    },
                    xaxis:{
                        zeroline:false,
                        showline:true,
                        showgrid:false,
                        gridcolor:"rgb(204, 204, 204)",
                        tickformat:"%H-%M",
                        fixedrange:true
                    },
                    paper_bgcolor:"rgba(0, 0, 0, 0.6)",
                    legend:{
                        font:{
                            color:"rgb(217, 217, 217)"
                        },
                        traceorder:"normal",
                        y:0.26,
                        x:1.02,
                        bordercolor:"rgb(0, 0, 0)",
                        bgcolor:"rgb(102, 102, 102)"
                    },
                    font:{
                        color:"rgb(204, 204, 204)"
                    },
                    plot_bgcolor:"rgba(1, 1, 1, 0)",/**/
                    titlefont:{
                        color:"rgb(217, 217, 217)"
                    },


                };

                Plotly.newPlot('myDiv', data, layout);
            }


        }
    };

};

module.exports = function(ngModule) {
    ngModule.directive('lineChart', lineChart);
}

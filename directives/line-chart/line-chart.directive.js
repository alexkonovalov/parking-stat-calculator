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

                var layout = {
                    title:"Parking Statistics Of the Day",
                    autosize:false,
                    yaxis:{
                   /*     tickfont:{
                            color:"rgb(238, 238, 238)",
                            size:11
                        },
                       ticks:"outside",
                       tickwidth:1,
                        showticklabels:true,
                        mirror:true,
                        zeroline:true,
                        showline:true,

                        autorange:false,
                        rangemode:"nonnegative"*/
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


                      /*  tickfont:{
                            color:"rgb(238, 238, 238)",
                            size:11
                        },
                        ticks:"inside",
                        tickwidth:1,
                        tickangle:90,
                        ticklen:5,
                        showticklabels:true,
                        mirror:true,
                        showline:false,
                        type:"date",
                        autorange:false,
                        rangemode:"nonnegative",
                        fixedrange:true,
                        zeroline:false,
                        tickmode:"auto",
                        dtick:3600000,
                        tick0:946760400000,

                        tickprefix:"",*/
                      /*  exponentformat:"E"*/
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

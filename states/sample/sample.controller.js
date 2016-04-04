'use strict';

function SampleController($scope, _,  dateParserService, intervalStatService) {

    $scope.xCoords =[];
    $scope.yCoords =[];


    $scope.onFileUpload = function(text){

        var intervals =  dateParserService.parseIntervals(text);
        var sampleInfo = intervalStatService.getStatics(intervals);

        var intervalStarts = []
        var intervalQuantities = []


        _.each(sampleInfo, function(interval) {

            intervalStarts.push(Date.parse(interval.start));
            intervalQuantities.push(interval.q);

            $scope.xCoords = intervalStarts;
            $scope.yCoords = intervalQuantities;

        });


    };

  //  $scope.sampleInfo = [];

    $scope.uploadOutput = "";


}


module.exports = function(ngModule) {
    ngModule.controller('SampleController', SampleController);
}

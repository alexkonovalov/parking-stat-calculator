"use strict";

function GraphController($scope, _, frameParserService, intervalStatService) {

    $scope.xCoords =[];
    $scope.yCoords =[];

    $scope.infoUploaded = false;

    $scope.onFileUpload = function(text){

        try{
            var intervals =  frameParserService.parseIntervals(text);
            var sampleInfo = intervalStatService.getStatistics(intervals);
        }
        catch(error){
            alert(error);
            return;
        }

        var intervalStarts = [];
        var intervalQuantities = [];

        _.each(sampleInfo, function(interval) {

            var date = interval.start;

            intervalStarts.push(date);
            intervalQuantities.push(interval.q);

        });

        $scope.xCoords = intervalStarts;
        $scope.yCoords = intervalQuantities;
        $scope.infoUploaded = true;

    };


    $scope.uploadOutput = "";


}


module.exports = function(ngModule) {

    ngModule.controller("GraphController", GraphController);

}

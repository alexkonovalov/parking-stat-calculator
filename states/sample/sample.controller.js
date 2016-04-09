﻿'use strict';

function SampleController($scope, _, moment, frameParserService, intervalStatService) {

    $scope.xCoords =[];
    $scope.yCoords =[];

    $scope.infoUploaded = false;

    $scope.onFileUpload = function(text){

        var intervals =  frameParserService.parseIntervals(text);
        var sampleInfo = intervalStatService.getStatistics(intervals);

        var intervalStarts = [];
        var intervalQuantities = [];

        _.each(sampleInfo, function(interval) {

            var date =/* moment(*/interval.start/*, 'hh:mm').toDate();*/

            intervalStarts.push(date);
            intervalQuantities.push(interval.q);

        });

        $scope.xCoords = intervalStarts;
        $scope.yCoords = intervalQuantities;
        $scope.infoUploaded = true;

    };

  //  $scope.sampleInfo = [];

    $scope.uploadOutput = "";


}


module.exports = function(ngModule) {
    ngModule.controller('SampleController', SampleController);
}

'use strict';

function SampleController($scope, dateParserService, intervalStatService) {


    $scope.onFileUpload = function(text){

        var intervals =  dateParserService.parseIntervals(text);
        $scope.sampleInfo = intervalStatService.getStatics(intervals);

    };

    $scope.sampleInfo = [];

    $scope.uploadOutput = "";
}


module.exports = function(ngModule) {
    ngModule.controller('SampleController', SampleController);
}

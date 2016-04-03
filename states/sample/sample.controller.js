'use strict';

function SampleController($scope) {


    $scope.sampleInfo = "foo";

    $scope.uploadOutput = "";
}


module.exports = function(ngModule) {
    ngModule.controller('SampleController', SampleController);
}

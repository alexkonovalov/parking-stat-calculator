'use strict';

function SampleController($scope) {
    $scope.sampleInfo = "foo";
}


module.exports = function(ngModule) {
    ngModule.controller('SampleController', SampleController);
}

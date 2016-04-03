'use strict';
require('./sampleD.scss');

function SampleD() {
    return {
        restrict: 'A',
        replace: false,
        scope: {
            show: '=sampleDShow'
        },
        template: require('./sampleD.html')
    };
};

module.exports = function(ngModule) {
    ngModule.directive('sampleD', SampleD);
}

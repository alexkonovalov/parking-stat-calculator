'use strict';
var ngModule = angular.module('registrationApp');



require('./sample/sample.controller.js')(ngModule);


function StateConfiguration($stateProvider,  $urlRouterProvider) {
    $urlRouterProvider.otherwise('/sample');

    $stateProvider
       .state('sample', {
           url: '/sample',
           template: require('./sample/sample.html'),
           controller: 'SampleController'
        });

}


module.exports = StateConfiguration;
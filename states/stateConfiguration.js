'use strict';
var ngModule = angular.module('registrationApp');

require('./sample/sample.scss');

require('./sample/sample.controller.js')(ngModule);

function StateConfiguration($stateProvider,  $urlRouterProvider, dateParserServiceProvider) {

    dateParserServiceProvider.setSeparators('\n', ', ');

    $urlRouterProvider.otherwise('/sample');

    $stateProvider
       .state('sample', {
           url: '/sample',
           template: require('./sample/sample.html'),
           controller: 'SampleController'
        });

}


module.exports = StateConfiguration;
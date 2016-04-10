'use strict';
var appModule = require('../appModule.js');

require('./graph/graph.style.scss');
require('./graph/graph.controller.js')(appModule);

function StateConfiguration($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/graph');

    $stateProvider.state('graph', {
        url: '/graph',
        template: require('./graph/graph.template.html'),
        controller: 'GraphController'
    });

}

module.exports = StateConfiguration;
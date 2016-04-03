'use strict';
var angular = require('angular');

var ngModule = angular.module('solo.directives', []);

require('./sample-d/sampleD.directive.js')(ngModule);

module.exports = ngModule;
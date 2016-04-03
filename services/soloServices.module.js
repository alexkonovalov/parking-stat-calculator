'use strict';
var angular = require('angular');

var ngModule = angular.module('solo.services', []);

require('./_sampleService.js')(ngModule);

module.exports = ngModule;
'use strict';
var angular = require('angular');

var ngModule = angular.module('solo.services', []);

require('./_underscoreService.js')(ngModule);
require('./_momentService.js')(ngModule);
require('./_dateParserService.js')(ngModule);
require('./_intervalStatService.js')(ngModule);

module.exports = ngModule;
'use strict';
var angular = require('angular');

var ngModule = angular.module('solo.directives', ['solo.services']);

require('./file-uploader/file-uploader.directive.js')(ngModule);
require('./line-chart/line-chart.directive.js')(ngModule);

module.exports = ngModule;
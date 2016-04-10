'use strict';
var angular = require('angular');

var moduleName = 'stat.directives';

var ngModule = angular.module(moduleName, [require("../services/statServices.module.js")]);

require('./file-uploader/file-uploader.directive.js')(ngModule);
require('./line-chart/line-chart.directive.js')(ngModule);

module.exports = moduleName;
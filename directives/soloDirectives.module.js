'use strict';
var angular = require('angular');

var ngModule = angular.module('solo.directives', []);

require('./file-uploader/file-uploader.directive.js')(ngModule);

module.exports = ngModule;
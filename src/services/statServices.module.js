"use strict";
var angular = require("angular");

var moduleName = "stat.services";

var ngModule = angular.module(moduleName, []);

require("./_underscoreService.js")(ngModule);
require("./_momentService.js")(ngModule);
require("./_frameParserService.js")(ngModule);
require("./_IntervalStatService.js")(ngModule);

module.exports = moduleName;

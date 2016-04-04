'use strict';

require("./styles/master.scss");

var angular = require('angular');
require('angular-ui-router');


require("./directives/soloDirectives.module.js");
require("./services/soloServices.module.js");

var app = angular.module('registrationApp', ['ui.router', 'solo.directives', 'solo.services']);

var solConf = require("./states/stateConfiguration.js");
app.config(solConf)

module.exports = {};
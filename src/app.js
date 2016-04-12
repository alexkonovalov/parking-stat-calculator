'use strict';
require("./styles/master.scss");

var appModule = require("./appModule.js");
var stateConfig = require("./states/stateConfiguration.js");

appModule.config(function AppConfiguration($stateProvider, $urlRouterProvider, frameParserServiceProvider) {

        frameParserServiceProvider.setConfiguration(
            {
                lineSepartor: "\n",
                endsSeparator: ", ",
                format: "hh:mm"
            });

        stateConfig($stateProvider, $urlRouterProvider);

    }
)

module.exports = {};
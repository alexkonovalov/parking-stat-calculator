'use strict';

var appName = "parkingsStatApp";

var app = require("angular")
    .module(appName,
        [
            require("angular-ui-router"),
            require("./directives/statDirectives.module.js"),
            require("./services/statServices.module.js")
        ]);

module.exports = app;
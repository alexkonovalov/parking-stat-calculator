'use strict';

var moment = require('moment');

function momentService() {
    return moment;
};

module.exports = function(ngModule) {
    ngModule.factory('moment', momentService);
}



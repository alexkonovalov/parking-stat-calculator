'use strict';

var _ = require('underscore');

function underscoreFactory() {
    return _; // assumes underscore has already been loaded on the page
};

module.exports = function(ngModule) {
    ngModule.factory('_', underscoreFactory);
}

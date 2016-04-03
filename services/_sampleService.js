'use strict';

function UrlService($window) {

    function parseLocation(location) {
        var pairs = location.substring(1).split("&");
        var obj = {};
        var pair;
        var i;

        for (i in pairs) {
            if (pairs.hasOwnProperty(i)) {
                if (pairs[i] === "") continue;

                pair = pairs[i].split("=");
                obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
            }
        }

        return obj;
    };

    this.findInLocation = function(param) {
        return parseLocation($window.location.search)[param];
    }

};

module.exports = function(ngModule) {
    ngModule.service('urlService', UrlService);
}

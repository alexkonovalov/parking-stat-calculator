'use strict';

function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    return arrayOfStrings;
}


function dateParserService() {

    var intervalSeparator = '\n';
    var startEndSeparator = ', ';

    this.parseIntervals = function(text){

        var intervalStrings = splitString(text, intervalSeparator);

        var intervals = [];

        for(var i = 0; i < intervalStrings.length; i++){
            var start = splitString(intervalStrings[i], startEndSeparator)[0];
            var end = splitString(intervalStrings[i], startEndSeparator)[1];

            intervals.push({
                start: start,
                end: end
            })
        }

        return intervals;

    }

};

module.exports = function(ngModule) {
    ngModule.service('dateParserService', dateParserService);
}

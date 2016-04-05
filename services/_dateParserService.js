'use strict';

function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    return arrayOfStrings;
}

var dateParserServiceProvider = function () {

    var intervalSeparator = '\n';
    var startEndSeparator = ' ';

    return {
        setSeparators: function (intervalSeparator, startEndSeparator) {
            intervalSeparator = intervalSeparator;
            startEndSeparator = startEndSeparator;
        },
        $get: function(moment) {

            return {
                parseIntervals: function (text) {

                    var intervalStrings = splitString(text, intervalSeparator);

                    var intervals = [];

                    for (var i = 0; i < intervalStrings.length; i++) {
                        var startStr = splitString(intervalStrings[i], startEndSeparator)[0];
                        var endStr = splitString(intervalStrings[i], startEndSeparator)[1];

                        var start = moment(startStr, 'hh:mm').toDate();
                        var end = moment(endStr, 'hh:mm').toDate();

                        intervals.push({
                            start: start,
                            end: end
                        })
                    }

                    return intervals;
                }
            };
        }
    }
};

module.exports = function(ngModule) {
    ngModule.provider('dateParserService', dateParserServiceProvider);
}




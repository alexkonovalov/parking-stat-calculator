'use strict';

function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    return arrayOfStrings;
}

//configurable fields
var intervalSeparator;
var startEndSeparator;
var format;

function frameParserServiceFactory(moment, _) {

    function isConfigured(){
        return  _.isString(intervalSeparator) && !_.isEmpty(intervalSeparator) &&
                _.isString(startEndSeparator) && !_.isEmpty(startEndSeparator) &&
                _.isString(format) && !_.isEmpty(format);
    }

    return {
        parseIntervals: function (text) {

            if(!isConfigured())
                throw new Error("Provider is not configured");

            var intervalStrings = splitString(text, intervalSeparator);

            var intervals = [];

            for (var i = 0; i < intervalStrings.length; i++) {

                var startStr = splitString(intervalStrings[i], startEndSeparator)[0];
                var endStr = splitString(intervalStrings[i], startEndSeparator)[1];

                var start = moment(startStr, format);
                var end = moment(endStr, format);

                if(!start.isValid() || !end.isValid())
                    throw new Error("Invalid time format in line \"" + intervalStrings[i] + "\"");

                var startDate = start.toDate();
                var endDate = end.toDate();

                if(startDate > endDate)
                    throw new Error("Interval start is bigger than the end");

                intervals.push({
                    start: startDate,
                    end: endDate
                })
            }

            return intervals;
        }
    };
};

module.exports = function(ngModule) {
    ngModule.provider('frameParserService', function () {

            return {
                setConfiguration: function (serviceConfig) {
                    intervalSeparator = serviceConfig.lineSepartor;
                    startEndSeparator = serviceConfig.endsSeparator;
                    format = serviceConfig.format;
                },
                $get: frameParserServiceFactory
            };
        });
}




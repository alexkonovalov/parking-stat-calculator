"use strict";

function intervalStatService(_, moment) {

    function getBounds(frames) {
        return _.chain(frames)
            .reduce(
                function (arr, el, index) {

                    arr.push(el.start);
                    arr.push(el.end)

                    return arr

                }, [])
            .sortBy(function (el) {
                return el;
            }).value();
    }

    function getFramesForAccumulation(bounds) {
        var framesForAccumulation = []

        var firstBound = bounds[0];

        if (!(firstBound.getHours() === 0 && firstBound.getMinutes() === 0)) {

            framesForAccumulation.push({
                start: moment("00:00", "hh:mm").toDate(),
                end: bounds[0],
                q: 0
            });

        }

        for (var i = 0; i < bounds.length - 1; i++) {
            framesForAccumulation.push({start: bounds[i], end: bounds[i + 1], q: 0});
        }

        var lastBound = bounds[bounds.length - 1];

        if (!(lastBound.getHours() === 23 && lastBound.getMinutes() === 59)) {

            framesForAccumulation.push({
                start: lastBound,
                end: moment("23:59", "hh:mm").toDate(),
                q: 0
            });

        }
        return framesForAccumulation;
    }

    this.getStatistics = function(frames){

        var bounds = getBounds(frames);
        var accumulatedFrames = getFramesForAccumulation(bounds);

        var sortedFrames = _.sortBy(frames, function (el) {
            return el.start;
        })


        //for each frame
        for(var i = 0, j = 0; i < sortedFrames.length; i++){

            //walk over the array of frames for accumulation
             for(; j < accumulatedFrames.length; j++){

                //if we found frame with the same start
                if(sortedFrames[i].start === accumulatedFrames[j].start){

                    //walk further and increment them till we reach the end
                    for(var u = j; sortedFrames[i].end >= accumulatedFrames[u].end; u++){
                        accumulatedFrames[u].q++;
                    }

                    break;
                }

            }
        }

        return accumulatedFrames;
    }

};

module.exports = function(ngModule) {
    ngModule.service("intervalStatService", intervalStatService);
}

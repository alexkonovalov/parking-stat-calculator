'use strict';

function intervalStatService(_) {


    this.getStatics = function(idsInitial){

        var ids = _.reduce(idsInitial
            , function (arr, el, index) {

                arr.push(el.start);
                arr.push(el.end)

                return arr

            }, []);

        ids = _.sortBy(ids, function(el){ return el; });

        var allFrames = []
        console.log(ids);

        allFrames.push({start: '00:00', end: ids[0], q: 0});

        for(var i = 0; i < ids.length; i++){

            if(i == ids.length - 1){
                allFrames.push({start: ids[i], end: '23:59', q: 0});
                continue;
            }

            allFrames.push({start: ids[i], end: ids[i+1], q: 0});

        }


        for(var i = 0; i < idsInitial.length; i++){

            for(var j = 0; j < allFrames.length; j++){

                if(idsInitial[i].start == allFrames[j].start){
                    for(var u = j; idsInitial[i].end >= allFrames[u].end; u++){
                        allFrames[u].q++;
                    }

                    break;
                }

            }
        }

        return allFrames;
    }

};

module.exports = function(ngModule) {
    ngModule.service('intervalStatService', intervalStatService);
}

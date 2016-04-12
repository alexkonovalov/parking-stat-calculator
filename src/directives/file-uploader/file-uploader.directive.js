"use strict";
require("./file-uploader.style.scss");

function fileUploader($window) {
    return {
        restrict: "A",
        replace: false,
        scope: {
            output: "=fileUploaderOutput",
            onLoad: "&fileUploaderOnLoad"
        },
        template: require("./file-uploader.template.html"),
        link:  function (scope, element) {

            scope.output = [];

            //Check File API support
            if (!($window.File && $window.FileList && $window.FileReader)) {
                throw new Error("browser does not support File API");
            }

            var inputElement = element.find("input")[0];

            inputElement.addEventListener("change", function (event) {


                var files = event.target.files;
                var fileContentArray = [];

                for (var i = 0; i < files.length; i++) {
                    var file = files[i];

                    //Only plain text
                    if (!file.type.match("plain")) continue;

                    var picReader = new FileReader();

                    picReader.addEventListener("load", function (event) {
                        var textFile = event.target;

                        scope.onLoad({
                            text: textFile.result
                        });

                        scope.$apply(function(){
                            scope.output.push(textFile.result);
                        });

                    });

                    picReader.readAsText(file);
                }

            });
        }
    };

};

module.exports = function(ngModule) {
    ngModule.directive("fileUploader", fileUploader);
}

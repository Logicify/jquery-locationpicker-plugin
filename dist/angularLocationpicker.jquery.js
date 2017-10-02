/*! jquery-locationpicker - v0.1.16 - 2017-10-02 */
"use strict";

angular.module("angular-jquery-locationpicker", []).constant("angularJQueryLocationpickerDefaultValue", {
    css: {
        width: "550px",
        height: "400px",
        "float": "left"
    }
}).service("angularJQueryLocationpickerService", [ "angularJQueryLocationpickerDefaultValue", function(defaultValue) {
    var service = {};
    service.callAutosizeOnInit = function(element, initCb) {
        var cb = initCb;
        if (!!cb) {
            initCb = function() {
                $(element).locationpicker("autosize");
                cb();
            };
        } else {
            initCb = function() {
                $(element).locationpicker("autosize");
            };
        }
    };
    service.checkDefaultStyles = function(element) {
        var elementStyle = element[0].style;
        element.css({
            width: elementStyle.width || defaultValue.css.width,
            height: elementStyle.height || defaultValue.css.height,
            "float": elementStyle.float || defaultValue.css.float,
            overflow: "hidden"
        });
    };
    return service;
} ]).directive("locationpicker", [ "angularJQueryLocationpickerService", function(service) {
    return {
        restrict: "EA",
        replace: true,
        scope: {
            options: "="
        },
        link: function(scope, element, attrs) {
            service.checkDefaultStyles(element);
            service.callAutosizeOnInit(element, scope.options.oninitialized);
            $(element).locationpicker(scope.options);
        }
    };
} ]);
/**
 * Created by sumragen on 21.09.16.
 */
'use strict';
angular.module('angular-jquery-locationpicker', [])
    .constant('angularJQueryLocationpickerDefaultValue', {
        css: {
            width: '550px',
            height: '400px',
            float: 'left'
        }
    })
    .service('angularJQueryLocationpickerService', [
        'angularJQueryLocationpickerDefaultValue',
        function (defaultValue) {
            var service = {};

            /**
             *  Without 'autosize' method map will be consist of grey box
             * @param element
             * @param initCb - defined method 'oninitialized' by user
             */
            service.callAutosizeOnInit = function (element, initCb) {
                var cb = initCb;
                if (!!cb) {
                    initCb = function () {
                        $(element).locationpicker('autosize');
                        cb();
                    }
                } else {
                    initCb = function () {
                        $(element).locationpicker('autosize');
                    }
                }
            };

            /**
             * If user forgot add some style parameters then assign default value
             * When user assign styles by css classes that method override values. Need use !important
             * @param element
             */
            service.checkDefaultStyles = function (element) {
                var elementStyle = element[0].style;
                element.css({
                    width: elementStyle.width || defaultValue.css.width,
                    height: elementStyle.height || defaultValue.css.height,
                    float: elementStyle.float || defaultValue.css.float,
                    overflow: 'hidden'
                });
            };

            return service;
        }
    ])
    .directive('locationpicker', [
        'angularJQueryLocationpickerService',
        function (service) {
            return {
                restrict: 'EA',
                replace: true,
                scope: {
                    options: '='
                },
                link: function (scope, element, attrs) {
                    service.checkDefaultStyles(element);
                    service.callAutosizeOnInit(element, scope.options.oninitialized);
                    $(element).locationpicker(scope.options);
                }
            };
        }]);
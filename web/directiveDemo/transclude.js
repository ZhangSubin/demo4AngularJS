'use strict';

var appModule = angular.module('transclude', []);

appModule.directive('hello', function () {
    return {
        template: '<div>Hi there <span ng-transclude></span></div>',
        transclude: true
    }
});
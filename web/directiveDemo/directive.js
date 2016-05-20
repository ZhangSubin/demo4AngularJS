'use strict';

var appModule = angular.module('app', []);

appModule.directive('hello', function () {
    return {
        restrict: 'E',
        //template: '<div>Hi there</div>',
        templateUrl: 'helloTemplate.html',
        replace: true
    };
});
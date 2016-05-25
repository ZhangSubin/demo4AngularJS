'use strict';

function RestaurantTableController($scope) {
    $scope.directory = [{name: 'The Handsome Heifer', cuisine: 'BBQ'},
        {name: 'Green\'s Green Greens', cuisine: 'Salads'},
        {name: 'House of Fine Fish', cuisine: 'Seafood'}];

    $scope.selectRestaurant = function (row) {
        $scope.selectedRow = row;
    }
}

//var app = angular.module('appRestaurant', []);
//
//app.controller('RestaurantTableController', function ($scope) {
//    $scope.directory = [{name: 'The Handsome Heifer', cuisine: 'BBQ'},
//        {name: 'Green\'s Green Greens', cuisine: 'Salads'},
//        {name: 'House of Fine Fish', cuisine: 'Seafood'}];
//
//    $scope.selectRestaurant = function (row) {
//        $scope.selectedRow = row;
//    }
//});

app = angular.module('app', []);
app.controller('MainCtrl', function($scope) {

    $scope.updated = 0;
    $scope.stop = function() {
        textWatch();
    };

    var textWatch = $scope.$watch('text', function(newVal, oldVal) {
        if (newVal === oldVal) { return; }
        $scope.updated++;
    });
});
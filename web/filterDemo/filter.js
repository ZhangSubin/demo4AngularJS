var homeModule = angular.module('HomeModule', []);

homeModule.filter('titleCase', function () {
    return function (input) {
        var words = input.split(' ');
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(' ');
    };
});

homeModule.controller('HomeController', function ($scope) {
    $scope.pageHeading = 'behold the majesty of your page title';
});
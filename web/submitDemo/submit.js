var addUser = angular.module('AddUserModule', []);

addUser.controller('AddUserController', function ($scope) {
    $scope.message = '';

    $scope.addUser = function () {
        // 这里把 user 真正保存到数据库中
        $scope.message = 'Thanks, ' + $scope.user.first + ', we added you!';
    }
});
//为核心的 AMail 服务创建模块
var aMailServices = angular.module('AMail', ['ngRoute']);

//在 URL，模板和控制器之间建立映射关系
aMailServices.config(function($routeProvider) {
    $routeProvider.
    when('/', {
        controller: ListController,
        templateUrl: 'list.html'
    }).
    //注意，为了创建详情视图，在 id 前面加了一个冒号，从而指定了一个参数化的 URL 组件
    when('/view/:id', {
        controller: DetailController,
        templateUrl: 'detail.html'
    }).
    otherwise({
        redirectTo: '/'
    });
});

//一些虚拟邮件
messages = [{
        id: 0, sender: 'jean@somecompany.com', subject: 'Hi there, old friend',
        date: 'Dec 7, 2013 12:32:00', recipients: ['greg@somecompany.com'],
        message: 'Hey, we should get together for lunch sometime and catch up.'
        + 'There are many things we should collaborate on this year.'
    }, {
        id: 1, sender: 'maria@somecompany.com', subject: 'Where did you leave my laptop?',
        date: 'Dec 7, 2013 8:15:12', recipients: ['greg@somecompany.com'],
        message: 'I thought you were going to put it in my desk drawer.'
        + 'But it does not seem to be there.'
    }, {
        id: 2, sender: 'bill@somecompany.com', subject: 'Lost python',
        date: 'Dec 6, 2013 20:35:02', recipients: ['greg@somecompany.com'],
        message: "Nobody panic, but my pet python is missing from her cage."
        + "She doesn't move too fast, so just call me if you see her."
    }];
    
//把邮件发布给邮件列表模板
function ListController($scope) {
    $scope.messages = messages;
}
//aMailServices.controller('ListController', function($scope) {
//    $scope.messages = messages;
//});

//从路由信息 (从 URL 中解析出来) 中获取邮件 id， 然后用它找到正确的邮件对象
function DetailController($scope, $routeParams) {
    $scope.message = messages[$routeParams.id];
}
//aMailServices.controller('DetailController', function($scope, $routeParams) {
//    $scope.messages = messages[$routeParams.id];
//});
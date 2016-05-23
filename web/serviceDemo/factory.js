// 创建一个模型用来支撑我们的购物视图
var shoppingModule = angular.module('ShoppingModule', []);

// 设置好服务工厂，用来创建我们的 Items 接口，以便访问服务端数据库
shoppingModule.factory('Items', function () {
    var items = {};
    items.query = function () {
        return [
            {title: 'Paint', description: 'Pots full of paint', price: 3.95},
            {title: 'Polka', description: 'Dots with polka', price: 2.95},
            {title: 'Pebbles', description: 'Just little rocks', price: 6.95}
        ];
    };
    return items;
});

shoppingModule.controller('ShoppingController', function ($scope, Items) {
    $scope.items = Items.query();
});
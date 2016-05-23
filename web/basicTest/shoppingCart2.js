var shoppingCart = angular.module('shoppingCart', []);

shoppingCart.controller('CartController', function ($scope) {
    $scope.bill = {};

    $scope.items = [
        {title: 'Paint pots', quantity: 8, price: 3.95},
        {title: 'Polka dots', quantity: 17, price: 12.95},
        {title: 'Pebbles', quantity: 5, price: 6.95}
    ];

    function calculateDiscount(newValue, oldValue, scope) {
        var total = 0;
        for (var i = 0, len = $scope.items.length; i < len; i++) {
            total = total + $scope.items[i].price * $scope.items[i].quantity;
        }
        $scope.bill.totalCart = total;
        $scope.bill.discount = newValue > 100 ? 10 : 0;
        $scope.bill.subtotal = total - $scope.bill.discount;
    }

    $scope.$watch('items', calculateDiscount, true);

    //$scope.$watch(function (newValue, oldValue, scope) {
    //    var total = 0;
    //    for (var i = 0, len = $scope.items.length; i < len; i++) {
    //        total = total + $scope.items[i].price * $scope.items[i].quantity;
    //    }
    //    $scope.bill.totalCart = total;
    //    $scope.bill.discount = newValue > 100 ? 10 : 0;
    //    $scope.bill.subtotal = total - $scope.bill.discount;
    //});
});
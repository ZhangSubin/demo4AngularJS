'use strict';

var services = angular.module('guthub.services', ['ngResource']);

services.factory('Recipe', ['$resource',
    // 通过 $resource 定义一个服务访问对象 SAO（Service Access Object）
    function($resource) {
        // 返回一个 Anguler Resource，是 RESTful 型的资源
        // 即可调用 Recipe.get()，Recipe.save(), Recipe.query(), Recipe.remove(), Recipe.delete()
        return $resource('/recipes/:id', {id: '@id'});
        //第一个 :id 表示路径带有 id 参数，第二个 @id 表示，参数从哪里取得
}]);

services.factory('MultiRecipeLoader', ['Recipe', '$q',
    function(Recipe, $q) {
        return function() {
            var delay = $q.defer();
            Recipe.query(function(recipes) {
                delay.resolve(recipes);
            }, function() {
                delay.reject('Unable to fetch recipes');
            });
            return delay.promise;
        }
    }
]);

services.factory('RecipeLoader', ['Recipe', '$route', '$q',
    function(Recipe, $route, $q) {
        return function() {
            var delay = $q.defer();
            Recipe.get({id: $route.current.params.recipeId}, function(recipe) {
                delay.resolve(recipe);
            }, function() {
                delay.reject('Unable to fetch recipe ' + $route.current.params.recipeId);
            });
            return delay.promise;
        }
    }
]);
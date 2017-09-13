var app = angular.module('mainApp', ["ngRoute"])
    .config(function ($routeProvider) {
       $routeProvider.when('/route',{
           templateUrl:"route/route.html",
           controller:"routeController"
       })
    });
app.controller("myController",function ($scope, $rootScope,service) {
    $rootScope.message = "Hello World ";
    $scope.scope = " i am $Scope";
    $rootScope.modifiedString = function (input) {
        $rootScope.output = service.processString(input);
    }
});
app.controller("ctrl",function ($scope) {
   $scope.scope1 = "i am  $scope";
    });
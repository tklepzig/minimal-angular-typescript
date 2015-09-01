/// <reference path="angular.d.ts"/>
var myModule;
(function (myModule) {
    'use strict';
    var HomeController = (function () {
        function HomeController($scope) {
            $scope.greeting = 'Welcome';
        }
        HomeController.$inject = ['$scope'];
        return HomeController;
    })();
    myModule.HomeController = HomeController;
    angular.module('minApp', [])
        .controller('HomeController', HomeController);
})(myModule || (myModule = {}));

/// <reference path='angular.d.ts' />
var myModule;
(function (myModule) {
    'use strict';
    angular.module('minApp', [])
        .controller('HomeController', HomeController);
    var HomeController = (function () {
        function HomeController() {
        }
        return HomeController;
    })();
    myModule.HomeController = HomeController;
})(myModule || (myModule = {}));

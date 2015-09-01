/// <reference path="angular.d.ts"/>

module myModule {

    'use strict';

    export interface IMyScope extends ng.IScope {
        greeting: string;
    }

    export class HomeController {
        public static $inject = ['$scope'];

        constructor($scope: IMyScope) {
            $scope.greeting = 'Welcome';
        }
    }

    angular.module('minApp', [])
        .controller('HomeController', HomeController);
}

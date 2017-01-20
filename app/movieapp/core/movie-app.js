'use strict';

angular.module('movieApp', ['ngRoute'])

.config([ '$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){

        $routeProvider
        .when('/results', {
            templateUrl: '/templates/results-template.html',
            controller: 'ResultsController'
        })
        .otherwise({ redirectTo: '/' });

        // Relieves us from having to use the hashbang tag in our urls
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }).hashPrefix('!');
    }
]);
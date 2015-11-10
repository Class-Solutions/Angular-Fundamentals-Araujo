'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngRoute', 'ngResource'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController'
            })
            .when('/newEvent', {
                templateUrl: 'templates/NewEvent.html',
                controller: 'EditEventController'
            })
            .when('/events', {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController'
            })
            .when('/event/:eventId', {
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventController',
                resolve:{
                    event:function($route,eventData){
                        return eventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
            })
            .when('/myProfile', {
                templateUrl: 'templates/EditProfile.html',
                controller: 'EditProfileController'
            })
            .when('/404', {
                templateUrl: 'templates/404.html',
            })
            .otherwise({
                redirectTo: '/404'
            });
        $locationProvider.html5Mode(true);
    });
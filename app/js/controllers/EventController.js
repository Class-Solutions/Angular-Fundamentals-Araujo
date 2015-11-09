/* global eventsApp */
/// <reference path="../services/EventData.js" />
'use strict';

eventsApp.controller('EventController',
	function EventController($scope, eventData, $log, $routeParams) {

		$scope.orderProp = '-upVoteCount';

		eventData.getEvent($routeParams.eventId)
			.$promise
			.then(function (event) { $scope.event = event; })
			.catch(function (data) { $log.warn(data); });

		$scope.upVoteSession = function (session) {
			session.upVoteCount++;
		};
		$scope.downVoteSession = function (session) {
			session.upVoteCount--;
		};
		$scope.changeValue = function () {
			$scope.show = !$scope.show;
		};
	});

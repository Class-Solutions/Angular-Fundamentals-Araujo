/* global eventsApp */
/// <reference path="../services/EventData.js" />
'use strict';

eventsApp.controller('EventController',
	function EventController($scope, eventData, $log,$anchorScroll) {

		$scope.orderProp = '-upVoteCount';

		eventData.getEventR()
			.$promise
			.then(function (event) { console.log(event); $scope.event = event; })
			.catch(function (data) { $log.warn(data); });

		// 	eventData.getEvent()
		// 	.success(function(event){$scope.event = event;})
		// 	.error(function(data,status,headers,config)
		// 	{				$log.warn(data, status, headers, config);
		// });


		$scope.scrollToSession = function scrollToSession() {
			console.log('heu');
			$anchorScroll();
		};

		$scope.upVoteSession = function (session) {
			session.upVoteCount++;
		};
		$scope.downVoteSession = function (session) {
			session.upVoteCount--;
		};
		$scope.changeValue = function () {
			$scope.show = !$scope.show;
		};
	}
	);

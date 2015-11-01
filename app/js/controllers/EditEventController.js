/* global eventsApp */
'use strict';

eventsApp.controller('EditEventController',
	function EditEventController($scope, eventData) {
		$scope.saveEvent = function saveEvent(event, newEventForm) {
			if (newEventForm.$valid) {
				eventData.save(event)
					.$promise
					.then(function (response) { console.log('success', response); })
					.catch(function (response) { console.log('error', response); });
			}
		};
		$scope.cancelEvent = function cancelEvent() {
			window.location = '/EventDetails.html';
		};
	}
	);

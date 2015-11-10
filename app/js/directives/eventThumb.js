'use strict';

eventsApp.directive('eventThumb', function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/templates/directives/eventThumb.html',
		scope: {
			event: '=event'
		}
	};
});
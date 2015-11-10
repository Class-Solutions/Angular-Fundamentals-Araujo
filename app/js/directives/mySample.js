'use strict';

eventsApp.directive('mySample', function () {
	return {
		restrict: 'E',
		template: "<input type='text' data-ng-model='sampleData' /><br/>{{sampleData}}<br />",
		scope: {}
	};
});
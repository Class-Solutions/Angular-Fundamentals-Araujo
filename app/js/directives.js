'use strict';

eventsApp.directive('mySample', function ($compile) {
	return {
		restrict:'E',
		link: function (scope, element, attrs, controller) {
			var markup = "<input type='text' data-ng-model='sampleData' /><br/>{{sampleData}}<br />";

			angular.element(element).html($compile(markup)(scope));
		}
	};
});
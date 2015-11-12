'use strict';

eventsApp.directive('collapsible', function () {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		template: "<div><h4 class='well-title' data-ng-click='toggleVisibility()'>{{title}}</h4><div data-ng-show='visible' data-ng-transclude></div></div>",
		controller: function ($scope) {
			$scope.visible = true;

			$scope.toggleVisibility = function () {
				$scope.visible = !$scope.visible;
			}
		},
		scope: {
			title: '@'
		}
	}
});
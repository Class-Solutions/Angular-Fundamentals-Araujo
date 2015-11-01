'use strict';

eventsApp.filter('duration', function () {
	return function (input, char) {
		switch (input) {
			case 1:
				return '30 mins';
			case 2:
				return '1 hr';
			case 3:
				return '4 hrs';
			case 4:
				return '8 hrs';
			default:
				return '';
		}
	}
});
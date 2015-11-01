eventsApp.factory('eventData', function ($http, $resource) {
	var resource = $resource('/data/event/:id', { id: '@id' });
	return {
		getEvent: function () {
			return $http({ method: 'GET', url: '/data/event/1' });
		},
		getEventR: function () {
			return resource.get({ id: 1 });
		},
		save: function (event) {
			event.id = 999;
			return resource.save(event);
		}
	};
});
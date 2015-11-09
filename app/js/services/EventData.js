eventsApp.factory('eventData', function ($resource) {
    var singleEvent = $resource('/data/event/:id', { id: '@id' });
    var manyEvents = $resource('/data/getAllEvents');

    return {
        getEvent: function (eventId) {
            return singleEvent.get({ id: eventId });
        },
        save: function (event) {
            return singleEvent.save(event);
        },
        getAllEvents: function () {
            return manyEvents.query();
        }
    };
});
module('Calendar.Day');

test('should accept moment object', function() {
    var day = new Calendar.Day(moment([2013, 2, 1]));

    equal(day.date.format('MM/DD/YYYY'), '03/01/2013');
});

test('should have data object', function() {
    var day = new Calendar.Day(moment([2013, 2, 1]));

    deepEqual(day.data, {});
});

test('should have events array', function() {
    var day = new Calendar.Day(moment([2013, 2, 1]));

    deepEqual(day.events, []);
});
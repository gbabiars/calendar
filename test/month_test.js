module('Calendar.Month');

test('december 2013 should have 5 weeks', function() {
    var month = new Calendar.Month(11, 2013);

    equal(month.weeks.length, 5);
});

test('march 2013 should have 6 weeks', function() {
    var month = new Calendar.Month(2, 2013);

    equal(month.weeks.length, 6);
});

test('each week in a month should have 7 days', function() {
    var month = new Calendar.Month(11, 2013);
    var weeks = month.weeks;

    equal(weeks[0].length, 7);
    equal(weeks[1].length, 7);
    equal(weeks[2].length, 7);
    equal(weeks[3].length, 7);
    equal(weeks[4].length, 7);
});

test('first day of march 2013 should be february 24th', function() {
    var month = new Calendar.Month(2, 2013);

    var firstDay = month.weeks[0][0];

    equal(firstDay.date.date(), 24);
    equal(firstDay.date.month(), 1);
});

test('last day of march 2013 should be april 6th', function() {
    var month = new Calendar.Month(2, 2013);

    var firstDay = month.weeks[5][6];

    equal(firstDay.date.date(), 6);
    equal(firstDay.date.month(), 3);
});
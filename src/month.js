var DAYS_IN_WEEK = 7;

function Month(month, year) {

    this.weeks = [];

    var firstDay = moment([year, month, 1, 0, 0, 0, 0]);
    var daysInMonth = firstDay.daysInMonth();
    var firstDayOffset = firstDay.day();
    var firstDayInMonthCalendar = firstDay.clone().subtract('day', firstDayOffset);
    var numberOfWeeksInMonth = Math.ceil((daysInMonth + firstDayOffset) / 7);

    this.weeks = _.range(numberOfWeeksInMonth).map(function(weekIndex) {

        return _.range(DAYS_IN_WEEK).map(function(dayIndex) {

            var dayOffset = (weekIndex * DAYS_IN_WEEK) + dayIndex
            return new Calendar.Day(firstDayInMonthCalendar.clone().add('day', dayOffset).toDate());

        });

    });
};

Calendar.Month = Month;
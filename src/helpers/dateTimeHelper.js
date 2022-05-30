import moment from 'moment-timezone';

export const minutesToMinutesHours = value => {
  const hours = value / 60;
  const rHours = Math.floor(hours);
  const minutes = (hours - rHours) * 60;
  const rMinutes = Math.round(minutes);
  return { hours: rHours, minutes: rMinutes };
};

export const getRemainingSeconds = (timezoneId, { date, time }) => {
  const currentTime = moment.tz(timezoneId);
  const goalTime = moment(time, 'HH:mm');
  const goalDate = moment(date);
  const goalDateTimeTz = moment.tz(
    {
      hour: goalTime.get('hour'),
      minute: goalTime.get('minute'),
      year: goalDate.get('year'),
      month: goalDate.get('month'),
      date: goalDate.get('date'),
    },
    timezoneId,
  );
  const duration = moment.duration(goalDateTimeTz.diff(currentTime));
  return duration.asSeconds();
};

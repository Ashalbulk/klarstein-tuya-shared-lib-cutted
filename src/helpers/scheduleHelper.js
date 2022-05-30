import moment from 'moment-timezone';
import { clone, find, path, propEq } from 'ramda';

export const getTimeRange = (maxLimit = 24, withZero = true) => {
  return Array(maxLimit)
    .fill()
    .map((v, i) => (withZero && i < 10 ? `0${i}` : i.toString()));
};

export const TIMER_TASK_NAME = {
  SCHEDULE: 'schedule',
  COUNTDOWN: 'countdownTurnDeviceOff',
};

export const STEPS = {
  LIST: 'list',
  DETAIL: 'detail',
  REPEAT: 'repeat',
  TEMPERATURE_SETTER: 'temperatureSetter',
  MAIN_MODE: 'mainModeSetter',
};

export const repeatObject = [
  { key: 'everyday', labelI18nKey: 'everyday', value: false },
  { key: 'everyWeekend', labelI18nKey: 'everyWeekend', value: false },
  { key: 'sunday', labelI18nKey: 'sunday', value: false },
  { key: 'monday', labelI18nKey: 'monday', value: false },
  { key: 'tuesday', labelI18nKey: 'tuesday', value: false },
  { key: 'wednesday', labelI18nKey: 'wednesday', value: false },
  { key: 'thursday', labelI18nKey: 'thursday', value: false },
  { key: 'friday', labelI18nKey: 'friday', value: false },
  { key: 'saturday', labelI18nKey: 'saturday', value: false },
  { key: 'once', labelI18nKey: 'once', value: false },
];

export function translateRepeatLoopObjectToSting(repeat) {
  String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
  };

  let loopString = '0000000';
  for (const item of repeat) {
    switch (item.key) {
      case 'once':
        return '0000000';
      case 'everyday':
        loopString = '1111111';
        break;
      case 'everyWeekend':
        loopString = loopString.replaceAt(6, '1').replaceAt(0, '1');
        break;
      case 'monday':
        loopString = loopString.replaceAt(1, '1');
        break;
      case 'tuesday':
        loopString = loopString.replaceAt(2, '1');
        break;
      case 'wednesday':
        loopString = loopString.replaceAt(3, '1');
        break;
      case 'thursday':
        loopString = loopString.replaceAt(4, '1');
        break;
      case 'friday':
        loopString = loopString.replaceAt(5, '1');
        break;
      case 'saturday':
        loopString = loopString.replaceAt(6, '1');
        break;
      case 'sunday':
        loopString = loopString.replaceAt(0, '1');
        break;
    }
  }
  return loopString;
}

export function getRepeatObjectByLoopString(loopString) {
  const repeatObjectCloned = clone(repeatObject);
  switch (loopString) {
    case '0000000':
      repeatObjectCloned.find(v => v.key === 'once').value = true;
      break;
    case '1111111':
      repeatObjectCloned.find(v => v.key === 'everyday').value = true;
      break;
    case '1000001':
      repeatObjectCloned.find(v => v.key === 'everyWeekend').value = true;
      break;
    default: {
      const daysArray = loopString.split('');
      for (const key in daysArray) {
        if (daysArray[key] === '1') {
          const properDayKey = parseInt(key) + 2;
          repeatObjectCloned[properDayKey].value = true;
        }
      }
    }
  }
  return repeatObjectCloned;
}

export function translateRepeatLoopStringToObject(loopString) {
  const result = [];
  switch (loopString) {
    case '0000000':
      result.push('once');
      break;
    case '1111111':
      result.push(find(propEq('key', 'everyday'))(repeatObject)['labelI18nKey']);
      break;
    case '1000001':
      result.push(find(propEq('key', 'everyWeekend'))(repeatObject)['labelI18nKey']);
      break;
  }
  if (!result.length) {
    const daysArray = loopString.split('');
    for (const key in daysArray) {
      if (daysArray[key] === '1') {
        const properDayKey = parseInt(key) + 2;
        result.push(repeatObject[properDayKey].labelI18nKey);
      }
    }
  }
  return result;
}

export function getClosestSchedule(currentDeviceTimers, timezoneId) {
  const schedule = path(['schedule'], currentDeviceTimers) || [];
  const m = moment.tz(timezoneId);
  const currentTime = m.format('HH:mm').split(':');
  const weekDay = m.day();
  for (const value of schedule) {
    if (value.status === true || value.status === 1) {
      const daysArray = value.loops.split('');
      if (value.loops === '0000000' || daysArray[weekDay] === '1') {
        const scheduleTime = value.time.split(':');
        if (
          scheduleTime[0] > currentTime[0] ||
          (scheduleTime[0] === currentTime[0] && scheduleTime[1] > currentTime[1])
        ) {
          return value;
        }
      }
    }
  }
  return null;
}

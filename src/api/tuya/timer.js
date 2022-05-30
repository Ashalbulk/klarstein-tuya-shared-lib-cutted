import { path } from 'ramda';
import { Platform } from 'react-native';

import helpers from '../../helpers';
import {
  addTimerWithTask,
  getTimerListWithTask,
  getTimerWithTask,
  removeTimerWithTask,
  removeTimerWithTimerId,
  updateTimerStatusWithTask,
  updateTimerStatusWithTimerIds,
  updateTimerWithTaskAndInstruct,
  updateTimerWithTimerId,
} from '../../tuya-sdk/lib/TuyaTimerApi';

export const addTimer = (devId, taskName, dps, time, loops) => {
  return addTimerWithTask({
    taskName,
    loops,
    devId,
    dps,
    time,
    status: true,
  })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const updateTimer = (taskName, devId, timerId, dps, time, loops, status) => {
  let updateTimer;
  if (Platform.OS === 'android') {
    const instruct = JSON.stringify([{ dps, time }]);
    updateTimer = () =>
      updateTimerWithTaskAndInstruct({
        taskName,
        devId,
        timeId: timerId,
        loops,
        instruct,
      });
  } else {
    updateTimer = () =>
      updateTimerWithTimerId({
        timerId,
        loops,
        devId,
        dps,
        time,
        aliasName: '',
        status,
      });
  }
  return updateTimer()
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const updateTimerStatus = (devId, taskName, timeId, isOpen) => {
  let updateTimerStatus;
  if (Platform.OS === 'android') {
    updateTimerStatus = () =>
      updateTimerStatusWithTask({
        devId,
        taskName,
        timeId,
        isOpen,
      });
  } else {
    updateTimerStatus = () =>
      updateTimerStatusWithTimerIds({
        devId,
        timerIds: [timeId],
        updateType: isOpen,
      });
  }
  return updateTimerStatus()
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const removeTimer = (devId, taskName, timeId) => {
  let removeTimer;
  if (Platform.OS === 'android') {
    removeTimer = () => removeTimerWithTask({ devId, taskName, timeId });
  } else {
    removeTimer = () => removeTimerWithTimerId({ timerId: timeId, bizId: devId });
  }
  return removeTimer()
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const getDeviceTimers = (taskName, devId) => {
  let getTimers;
  if (Platform.OS === 'android') {
    getTimers = () => getTimerWithTask({ devId, taskName });
  } else {
    getTimers = () => getTimerListWithTask({ task: taskName, bizId: devId });
  }

  return getTimers()
    .then(data => {
      let list = {};
      if (Platform.OS === 'ios') {
        list[taskName] = [];
        data.forEach(a => {
          a.timerId = a.groupId;
          list[taskName].push(a);
        });
      } else {
        const timerList = path(['timerList'], data);
        if (timerList) {
          list[taskName] = timerList;
        }
      }
      return { success: true, data: list };
    })
    .catch(helpers.apiHelper.handleError);
};

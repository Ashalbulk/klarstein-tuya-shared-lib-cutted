const TimerNativeApi = require('react-native').NativeModules.TuyaTimerModule;

const TuyaTimerApi = {
  addTimerWithTask(params) {
    return TimerNativeApi.addTimerWithTask(params);
  },
  getTimerTaskStatusWithDeviceId(params) {
    return TimerNativeApi.getTimerTaskStatusWithDeviceId(params);
  },
  updateTimerStatusWithTask(params) {
    return TimerNativeApi.updateTimerStatusWithTask(params);
  },
  updateTimerStatusWithTimerIds(params) {
    return TimerNativeApi.updateTimerStatusWithTimerIds(params);
  },
  removeTimerWithTask(params) {
    return TimerNativeApi.removeTimerWithTask(params);
  },
  removeTimerWithTimerId(params) {
    return TimerNativeApi.removeTimerWithTimerId(params);
  },
  updateTimerWithTask(params) {
    return TimerNativeApi.updateTimerWithTask(params);
  },
  updateTimerWithTimerId(params) {
    return TimerNativeApi.updateTimerWithTimerId(params);
  },
  updateTimerWithTaskAndInstruct(params) {
    return TimerNativeApi.updateTimerWithTaskAndInstruct(params);
  },
  getTimerWithTask(params) {
    return TimerNativeApi.getTimerWithTask(params);
  },
  getAllTimerWithDeviceId(params) {
    return TimerNativeApi.getAllTimerWithDeviceId(params);
  },
  getTimerListWithTask(params) {
    return TimerNativeApi.getTimerListWithTask(params);
  },
};
module.exports = TuyaTimerApi;

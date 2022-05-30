const ActivatorNativeApi = require('react-native').NativeModules.TuyaActivatorModule;

const TuyaActivatorApi = {
  getCurrentSSID() {
    return ActivatorNativeApi.getCurrentSSID();
  },
  initActivator(params) {
    return ActivatorNativeApi.initActivator(params);
  },
  stop() {
    ActivatorNativeApi.stop();
  },
  newGwSubDevActivator(params) {
    return ActivatorNativeApi.newGwSubDevActivator(params);
  },
  newGwDevActivator(params) {
    return ActivatorNativeApi.newGwDevActivator(params);
  },
};

module.exports = TuyaActivatorApi;

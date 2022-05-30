import { NativeModules } from 'react-native';
const CoreNativeApi = NativeModules.TuyaCoreModule;
import { NEEDLOGIN, TYNativeBridge } from './bridgeUtils';

const TuyaCoreApi = {
  onDestroy() {
    CoreNativeApi.onDestroy();
  },
  setDebugMode(params) {
    return CoreNativeApi.setDebugMode(params);
  },

  apiRequest(params) {
    return CoreNativeApi.apiRequest(params);
  },
  initWithOptions(params) {
    CoreNativeApi.initWithOptions(params);
  },
  initWithoutOptions() {
    CoreNativeApi.initWithOptions();
  },
  turnOffNeedLoginListener(sub) {
    TYNativeBridge.off(sub);
  },
  turnOnNeedLoginListener(needLoginListener) {
    CoreNativeApi.setOnNeedLoginListener();
    return TYNativeBridge.on(NEEDLOGIN, () => {
      needLoginListener();
    });
  },
};

module.exports = TuyaCoreApi;

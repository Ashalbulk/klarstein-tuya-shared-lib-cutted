const HomeManagerNativeApi = require('react-native').NativeModules.TuyaHomeManagerModule;
import { Platform } from 'react-native';

import { HOMECHANGE, TYNativeBridge } from './bridgeUtils';

const TuyaHomeManagerApi = {
  queryHomeList() {
    return HomeManagerNativeApi.queryHomeList();
  },
  createHome(params) {
    return HomeManagerNativeApi.createHome(params);
  },
  registerTuyaHomeChangeListener(
    onHomeAdded,
    onHomeRemoved,
    onHomeInfoChanged,
    onSharedDeviceList,
    onSharedGroupList,
    onServerConnectSuccess,
  ) {
    HomeManagerNativeApi.registerTuyaHomeChangeListener();
    return TYNativeBridge.on(TYNativeBridge.bridge(HOMECHANGE, ''), data => {
      if (data.type === 'onHomeAdded') {
        onHomeAdded(data);
      } else if (data.type === 'onHomeRemoved') {
        onHomeRemoved(data);
      } else if (data.type === 'onHomeInfoChanged') {
        onHomeInfoChanged(data);
      } else if (data.type === 'onSharedDeviceList') {
        onSharedDeviceList(data);
      } else if (data.type === 'onSharedGroupList') {
        onSharedGroupList(data);
      } else if (data.type === 'onServerConnectSuccess') {
        onServerConnectSuccess(data);
      }
    });
  },
  unregisterTuyaHomeChangeListener(listeners) {
    Platform.select({
      ios: () => HomeManagerNativeApi.unregisterTuyaHomeChangeListener(listeners),
      android: () => HomeManagerNativeApi.unregisterTuyaHomeChangeListener(),
    })();
    TYNativeBridge.off(TYNativeBridge.bridge(HOMECHANGE, ''));
  },
  onDestroy() {
    HomeManagerNativeApi.onDestroy();
  },
};

module.exports = TuyaHomeManagerApi;

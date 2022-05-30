import { NativeEventEmitter, NativeModules, Platform } from 'react-native';

const GROUPLISTENER = 'groupListener';
const NEEDLOGIN = 'needLogin';

const OTALISTENER = 'otaListener';
const DEVLISTENER = 'devListener';
const GATWAYLISTENER = 'gatwayListener';
const HOMEDEVICESTATUS = 'homeDeviceStatus';
const HOMESTATUS = 'homeStatus';
const HOMECHANGE = 'homeChange';
const TRANSFERDATA = 'transferData';
const TRANSFER = 'transfer';
const WARNMESSAGEARRIVED = 'WarnMessageArrived';
const SMARTUPDATE = 'SmartUpdate';
const SEARCHDEVICE = 'searchDevice';

const TYNativeBridge = {};

const TY_HOME_CHANGE_EMITTER = 'TuyaRNHomeChangeEventEmitter';
const TY_HOME_STATUS_EMITTER = 'TuyaRNHomeStatusEventEmitter';
const TY_DEVICE_LISTENER_EMITTER = 'TuyaRNDeviceInfoEventEmitter';
const TY_NEED_LOGIN_EMITTER = 'TuyaRNNeedLoginEventEmitter';

TYNativeBridge.on = (eventname, callback) => {
  if (Platform.OS === 'android') {
    const emitter = new NativeEventEmitter();
    return emitter.addListener(eventname, callback);
  } else {
    let emitterModuleName = TY_HOME_CHANGE_EMITTER;
    const pureEventName = eventname.split('//') ?? [];
    switch (pureEventName[0]) {
      case HOMECHANGE:
        emitterModuleName = TY_HOME_CHANGE_EMITTER;
        break;
      case DEVLISTENER:
        emitterModuleName = TY_DEVICE_LISTENER_EMITTER;
        break;
      case NEEDLOGIN:
        emitterModuleName = TY_NEED_LOGIN_EMITTER;
        break;
      case HOMESTATUS:
        emitterModuleName = TY_HOME_STATUS_EMITTER;
        break;
    }
    if (NativeModules[emitterModuleName] !== undefined) {
      const emitter = new NativeEventEmitter(NativeModules[emitterModuleName]);
      return emitter.addListener(eventname, callback);
    }
  }
};
TYNativeBridge.off = sub => {
  sub && sub.remove?.();
};
TYNativeBridge.bridge = (key, id) => {
  return key + '//' + id;
};

TYNativeBridge.bridgeSplit = eventType => {
  return eventType?.split('//');
};

module.exports = {
  TYNativeBridge,
  GROUPLISTENER,
  OTALISTENER,
  DEVLISTENER,
  GATWAYLISTENER,
  HOMEDEVICESTATUS,
  HOMESTATUS,
  HOMECHANGE,
  TRANSFERDATA,
  TRANSFER,
  WARNMESSAGEARRIVED,
  SMARTUPDATE,
  SEARCHDEVICE,
  NEEDLOGIN,
};

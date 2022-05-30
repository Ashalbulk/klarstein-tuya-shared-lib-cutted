import { Platform } from 'react-native';

import { wifiTimeOut } from '../../constants/tuya-constant';
import helpers from '../../helpers';
import { TuyaGatewayApi } from '../../tuya-sdk';
import * as TuyaActivatorApi from '../../tuya-sdk/lib/TuyaActivatorApi';
import * as TuyaDeviceApi from '../../tuya-sdk/lib/TuyaDeviceApi';
import * as TuyaHomeApi from '../../tuya-sdk/lib/TuyaHomeApi';
import * as TuyaHomeDataManagerApi from '../../tuya-sdk/lib/TuyaHomeDataManagerApi';

export const getHubDevicesList = hubId => {
  return TuyaHomeApi.getHomeDetail({ homeId: hubId })
    .then(data => {
      return {
        success: true,
        data: Platform.OS === 'android' ? helpers.tuyaHelper.mapRoomsToDevices(data) : data,
      };
    })
    .catch(helpers.apiHelper.handleError);
};

export const deviceAdd = (ssid, password, hubId, connectionType) => {
  return TuyaActivatorApi.initActivator({
    homeId: hubId,
    ssid: ssid,
    password: password,
    time: wifiTimeOut,
    type: connectionType,
  })
    .then(data => {
      TuyaActivatorApi.stop();
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const renameDevice = (devId, name) => {
  return TuyaDeviceApi.renameDevice({ devId, name })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const removeDevice = devId => {
  return TuyaDeviceApi.removeDevice({ devId })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const sendControlCommand = (devId, dps) => {
  return TuyaDeviceApi.publishDps({ devId, dps })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const deviceControlAddListener = (devId, onChangeDeviceSettings) => {
  return TuyaDeviceApi.registerDevListener(
    { devId },
    data => onChangeDeviceSettings(data),
    () => {
      // console.warn('onRemoved', data);
    },
    () => {
      // console.warn('onStatusChanged', data);
    },
    () => {
      // console.warn('onNetworkStatusChanged', data);
    },
    () => {
      // console.warn('onDevInfoUpdate', data);
    },
  );
};

export const deviceControlRemoveListener = (devId, deviceListener) => {
  TuyaDeviceApi.unRegisterDevListener({ devId }, deviceListener);
  // TuyaDeviceApi.onDestroy({ devId });
};

//works only on iOS
export const getDp = (devId, dpId) => {
  return TuyaDeviceApi.getDp({ devId, dpId })
    .then(data => {
      return { success: true, data: { [dpId]: data } };
    })
    .catch(helpers.apiHelper.handleError);
};

export const getDeviceBeanWithoutCache = devId => {
  return TuyaHomeDataManagerApi.getDeviceBeanWithoutCache({ devId })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const getSchemaByDeviceId = devId => {
  return TuyaHomeDataManagerApi.getSchemaJsonString({ devId })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const getSubDevicesList = devId => {
  return TuyaGatewayApi.getSubDevList({ devId })
    .then(data => {
      return {
        success: true,
        data: data,
      };
    })
    .catch(helpers.apiHelper.handleError);
};

export const addSubDevice = devId => {
  return TuyaActivatorApi.newGwSubDevActivator({ devId, time: wifiTimeOut })
    .then(data => {
      TuyaActivatorApi.stop();
      return {
        success: true,
        data,
      };
    })
    .catch(helpers.apiHelper.handleError);
};

export const addWiredDevice = homeId => {
  return TuyaActivatorApi.newGwDevActivator({ homeId, time: wifiTimeOut })
    .then(data => {
      TuyaActivatorApi.stop();
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const stopDeviceConnection = TuyaActivatorApi.stop;

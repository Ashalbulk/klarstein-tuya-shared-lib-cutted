import { path } from 'ramda';

import { renewTuyaSessionAndReloadTheApp } from '../actions/authentication/login';
import { addTuyaSessionExpListener } from '../actions/listeners/listeners';
import TuyaAPI from '../api/tuya';
// import configureStore from '../store';
const configureStore = require('../../../../app/store').default;
const setRoomsToDeviceList = (deviceList, rooms) => {
  return deviceList.map(device => {
    const { devId } = device;
    device.roomId = -1;
    for (const room of rooms) {
      if (room.deviceList.find(deviceFromRoom => deviceFromRoom.devId === devId)) {
        device.roomId = room.roomId;
      }
    }
    return device;
  });
};

export const mapRoomsToDevices = data => {
  const homeBean = path(['homeBean'], data);
  const { deviceList, rooms, sharedDeviceList, sharedGroupList, groupList } = homeBean;

  return {
    deviceList: setRoomsToDeviceList(deviceList, rooms),
    sharedDeviceList,
    sharedGroupList,
    groupList,
  };
};

export const turnOnNeedLoginListenerWithAction = () => {
  const { store } = configureStore();
  const tuyaSessionExpListener = TuyaAPI.TuyaCoreApi.turnOnNeedLoginListener(() => {
    store.dispatch(renewTuyaSessionAndReloadTheApp());
  });
  store.dispatch(addTuyaSessionExpListener(tuyaSessionExpListener));
};

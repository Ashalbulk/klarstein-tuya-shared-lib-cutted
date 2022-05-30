import helpers from '../../helpers';
import * as TuyaHomeApi from '../../tuya-sdk/lib/TuyaHomeApi';
import * as TuyaRoomApi from '../../tuya-sdk/lib/TuyaRoomApi';

export const getRoomsList = hubId => {
  return TuyaHomeApi.queryRoomList({ homeId: hubId })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const addRoom = (hubId, name) => {
  return TuyaHomeApi.addRoom({ homeId: hubId, name })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const addDeviceToRoom = (roomId, devId) => {
  return TuyaRoomApi.addDevice({ roomId, devId })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const renameRoom = (roomId, name) => {
  return TuyaRoomApi.updateRoom({ roomId, name })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const removeRoom = (hubId, roomId) => {
  return TuyaHomeApi.removeRoom({ homeId: hubId, roomId })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

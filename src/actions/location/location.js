import * as types from '../../actionTypes/location/location';

export function getLocation() {
  return {
    type: types.GET_LOCATION,
  };
}

export function getLocationFailed() {
  return {
    type: types.GET_LOCATION_FAILED,
  };
}

export function detectLocationByDevicePosition() {
  return {
    type: types.DETECT_LOCATION_BY_DEVICE_POSITION,
  };
}

export function detectLocationByDevicePositionSuccess({ result }) {
  return {
    type: types.DETECT_LOCATION_BY_DEVICE_POSITION_SUCCESS,
    data: result,
  };
}

export function detectLocationByDevicePositionFailed({ error }) {
  return {
    type: types.DETECT_LOCATION_BY_DEVICE_POSITION_FAILED,
    error,
  };
}

export function saveLocation(location, address, homeId) {
  return {
    type: types.SAVE_LOCATION,
    location,
    address,
    homeId,
  };
}

import * as types from '../../actionTypes/location/ip';

export function setLocalIpToStore(localIp) {
  return {
    type: types.SET_LOCAL_IP_TO_STORE,
    localIp,
  };
}

export function detectLocationByIp() {
  return {
    type: types.DETECT_LOCATION_BY_IP,
  };
}

export function detectLocationByIpSuccess({ data }) {
  return {
    type: types.DETECT_LOCATION_BY_IP_SUCCESS,
    data,
  };
}

export function detectLocationByIpFailed({ error }) {
  return {
    type: types.DETECT_LOCATION_BY_IP_FAILED,
    error,
  };
}

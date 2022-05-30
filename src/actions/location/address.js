import * as types from '../../actionTypes/location/address';

export function getAddress(longitude, latitude) {
  return {
    type: types.GET_ADDRESS,
    longitude,
    latitude,
  };
}

export function getAddressSuccess(address) {
  return {
    type: types.GET_ADDRESS_SUCCESS,
    address,
  };
}

export function getAddressFailed({ error }) {
  return {
    type: types.GET_ADDRESS_FAILED,
    error,
  };
}

export function clearAddress() {
  return {
    type: types.CLEAR_ADDRESS,
  };
}

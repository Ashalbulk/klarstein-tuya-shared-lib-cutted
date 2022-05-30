import { debounce, takeEvery } from 'redux-saga/effects';

import * as address from '../../actionTypes/location/address';
import * as ipTypes from '../../actionTypes/location/ip';
import * as location from '../../actionTypes/location/location';
import { getAddress, getLocationAsync, getLocationByDevicePosition, getLocationByIp } from './saga';

export default [
  debounce(1000, address.GET_ADDRESS, getAddress),
  takeEvery(location.GET_LOCATION, getLocationAsync),
  takeEvery(ipTypes.DETECT_LOCATION_BY_IP, getLocationByIp),
  takeEvery(location.DETECT_LOCATION_BY_DEVICE_POSITION, getLocationByDevicePosition),
];

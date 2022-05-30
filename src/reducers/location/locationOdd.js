// TODO: remove this file.
// import * as types from './actions/actionTypes';
import * as addressTypes from '../../actionTypes/location/address';
import * as locationTypes from '../../actionTypes/location/location';
import * as weatherTypes from '../../actionTypes/location/weather';
import createReducer from '../../lib/createReducer';

const initialState = {
  loading: false,
  tempAddress: {},
  ipAddress: {},
  devicePosition: {},
};

export const locationReducer = createReducer(initialState, {
  [addressTypes.GET_ADDRESS](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [addressTypes.GET_ADDRESS_SUCCESS](state, { address }) {
    return {
      ...state,
      loading: false,
      tempAddress: address,
    };
  },
  [addressTypes.GET_ADDRESS_FAILED](state, { error }) {
    return {
      ...state,
      loading: false,
      tempAddress: { error },
    };
  },
  [addressTypes.CLEAR_ADDRESS](state) {
    return {
      ...state,
      loading: false,
      tempAddress: {},
    };
  },
  [weatherTypes.GET_WEATHER_FAILED](state) {
    return {
      ...state,
    };
  },
  [locationTypes.DETECT_LOCATION_BY_IP](state) {
    return {
      ...state,
      loading: true,
      ipAddress: {},
    };
  },
  [locationTypes.DETECT_LOCATION_BY_IP_SUCCESS](state, { data }) {
    return {
      ...state,
      loading: false,
      ipAddress: data,
    };
  },
  [locationTypes.DETECT_LOCATION_BY_IP_FAILED](state, { error }) {
    return {
      ...state,
      loading: false,
      ipAddress: { error },
    };
  },
  [locationTypes.DETECT_LOCATION_BY_DEVICE_POSITION](state) {
    return {
      ...state,
      loading: true,
      devicePosition: {},
    };
  },
  [locationTypes.DETECT_LOCATION_BY_DEVICE_POSITION_SUCCESS](state, { data }) {
    return {
      ...state,
      loading: false,
      devicePosition: data,
    };
  },
  [locationTypes.DETECT_LOCATION_BY_DEVICE_POSITION_FAILED](state, { error }) {
    return {
      ...state,
      loading: false,
      devicePosition: { error },
    };
  },
});

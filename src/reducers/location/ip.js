import * as types from '../../actionTypes/location/ip';
import createReducer from '../../lib/createReducer';

const initialState = {
  loading: false,
  localIp: null,
  ipAddress: {},
};

export default createReducer(initialState, {
  [types.SET_LOCAL_IP_TO_STORE](state, { localIp }) {
    return {
      ...state,
      localIp,
    };
  },
  [types.DETECT_LOCATION_BY_IP](state) {
    return {
      ...state,
      loading: true,
      ipAddress: {},
    };
  },
  [types.DETECT_LOCATION_BY_IP_SUCCESS](state, { data }) {
    return {
      ...state,
      loading: false,
      ipAddress: data,
    };
  },
  [types.DETECT_LOCATION_BY_IP_FAILED](state, { error }) {
    return {
      ...state,
      loading: false,
      ipAddress: { error },
    };
  },
});

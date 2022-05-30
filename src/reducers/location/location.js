import * as types from '../../actionTypes/location/location';
import createReducer from '../../lib/createReducer';

const initialState = {
  loading: false,
  devicePosition: {},
};

export default createReducer(initialState, {
  [types.DETECT_LOCATION_BY_DEVICE_POSITION](state) {
    return {
      ...state,
      loading: true,
      devicePosition: {},
    };
  },
  [types.DETECT_LOCATION_BY_DEVICE_POSITION_SUCCESS](state, { data }) {
    return {
      ...state,
      loading: false,
      devicePosition: data,
    };
  },
  [types.DETECT_LOCATION_BY_DEVICE_POSITION_FAILED](state, { error }) {
    return {
      ...state,
      loading: false,
      devicePosition: { error },
    };
  },
});

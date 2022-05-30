import * as types from '../../actionTypes/location/address';
import createReducer from '../../lib/createReducer';

const initialState = {
  loading: false,
  tempAddress: {},
};

export default createReducer(initialState, {
  [types.GET_ADDRESS](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [types.GET_ADDRESS_SUCCESS](state, { address }) {
    return {
      ...state,
      loading: false,
      tempAddress: address,
    };
  },
  [types.GET_ADDRESS_FAILED](state, { error }) {
    return {
      ...state,
      loading: false,
      tempAddress: { error },
    };
  },
  [types.CLEAR_ADDRESS](state) {
    return {
      ...state,
      loading: false,
      tempAddress: {},
    };
  },
});

import * as loginTypes from '../../actionTypes/authentication/login';
import * as ip from '../../actionTypes/location/ip';
import createReducer from '../../lib/createReducer';

const initialState = {
  errorMessage: null,
  user: null,
  loading: false,
  localIp: null,
};

export default createReducer(initialState, {
  [loginTypes.LOGIN_REQUEST](state) {
    return {
      ...state,
    };
  },
  [loginTypes.LOGIN_TUYA_REQUEST](state) {
    return {
      ...state,
    };
  },
  [loginTypes.LOGIN_TUYA_SUCCESS](state) {
    return {
      ...state,
      errorMessage: null,
    };
  },
  [loginTypes.LOGIN_TUYA_FAILED](state, { errorMessage }) {
    return {
      ...state,
      errorMessage,
    };
  },
  [loginTypes.LOGIN_REMOVE_TEMP_DATA](state) {
    return {
      ...state,
      errorMessage: null,
    };
  },
  [loginTypes.LOGOUT](state) {
    return {
      ...state,
      user: {},
    };
  },
  [loginTypes.SET_DATA_AFTER_RESPONSE](state, { user }) {
    return {
      ...state,
      user: user?.user,
    };
  },
  [loginTypes.LOGIN_FAILED](state, { errorMessage }) {
    return {
      ...state,
      errorMessage,
    };
  },
  [loginTypes.LOGIN_ENABLE_LOADER](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [loginTypes.LOGIN_DISABLE_LOADER](state) {
    return {
      ...state,
      loading: false,
    };
  },
  [ip.SET_LOCAL_IP_TO_STORE](state, { localIp }) {
    return {
      ...state,
      localIp,
    };
  },
});

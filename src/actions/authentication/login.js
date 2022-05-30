/*
 * Reducer actions related with login
 */
import * as types from '../../actionTypes/authentication/login';

export function loginRequest(email, password) {
  return {
    type: types.LOGIN_REQUEST,
    email,
    password,
  };
}

export function loginFailed(errorMessage) {
  return {
    type: types.LOGIN_FAILED,
    errorMessage,
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}

export function loginTuyaRequest() {
  return {
    type: types.LOGIN_TUYA_REQUEST,
  };
}

export function loginTuyaFailed(errorMessage) {
  return {
    type: types.LOGIN_TUYA_FAILED,
    errorMessage,
  };
}

export function loginTuyaSuccess() {
  return {
    type: types.LOGIN_TUYA_SUCCESS,
  };
}

export function loginRemoveTempData() {
  return {
    type: types.LOGIN_REMOVE_TEMP_DATA,
  };
}

export function setDataAfterResponse(user) {
  return {
    type: types.SET_DATA_AFTER_RESPONSE,
    user,
  };
}

export function enableLoader() {
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
}

export function renewTuyaSessionAndReloadTheApp() {
  return {
    type: types.RENEW_TUYA_SESSION_AND_RELOAD_THE_APP,
  };
}

export function removeListenersOnLogoutRequest() {
  return {
    type: types.REMOVE_LISTENERS_ON_LOGOUT_REQUEST,
  };
}

export function removeAllListenersSuccess() {
  return {
    type: types.REMOVE_LISTENERS_ON_LOGOUT_SUCCESS,
  };
}

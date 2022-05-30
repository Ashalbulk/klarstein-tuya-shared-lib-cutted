import * as types from '../../actionTypes/profile/user';

export function getUserInfo() {
  return {
    type: types.GET_USER_INFO,
  };
}

export function getUserInfoSuccess(labels) {
  return {
    type: types.GET_USER_INFO_SUCCESS,
    labels,
  };
}

export function getUserInfoFailed() {
  return {
    type: types.GET_USER_INFO_FAILED,
  };
}

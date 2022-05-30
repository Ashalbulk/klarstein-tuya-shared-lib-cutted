import * as types from '../../actionTypes/listeners/listeners';

export function addTuyaSessionExpListener(tuyaSessionExpListener) {
  return {
    type: types.ADD_TUYA_SESSION_EXP_LISTENER,
    tuyaSessionExpListener,
  };
}

export function removeTuyaSessionExpListener() {
  return {
    type: types.REMOVE_TUYA_SESSION_EXP_LISTENER,
  };
}

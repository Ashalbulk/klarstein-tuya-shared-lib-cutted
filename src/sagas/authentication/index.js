import { takeEvery } from 'redux-saga/effects';

import * as loginTypes from '../../actionTypes/authentication/login';
import loginFirebase, {
  checkVerifiedUserExists,
  logoutForeignServices,
  renewTuyaSessionAndReloadTheApp,
  watchRemoveListenersOnLogout,
} from '../../sagas/authentication/loginSaga';

export default [
  takeEvery(loginTypes.LOGIN_REQUEST, loginFirebase),
  takeEvery(loginTypes.CHECK_VERIFIED_USER_EXISTS, checkVerifiedUserExists),
  takeEvery(loginTypes.LOGOUT, logoutForeignServices),

  takeEvery(loginTypes.RENEW_TUYA_SESSION_AND_RELOAD_THE_APP, renewTuyaSessionAndReloadTheApp),
  takeEvery(loginTypes.REMOVE_LISTENERS_ON_LOGOUT_REQUEST, watchRemoveListenersOnLogout),
];

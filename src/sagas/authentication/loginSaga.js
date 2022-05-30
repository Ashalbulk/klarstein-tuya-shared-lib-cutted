import {
  navigateToLoginWithResetStack,
  navigateToMainTabNavigatorWithResetStack,
} from 'app/navigation/NavigationHelpers';
import I18n from 'i18next';
import { isEmpty, path } from 'ramda';
import RNRestart from 'react-native-restart';
import { call, put, select } from 'redux-saga/effects';

import * as loginActions from '../../actions/authentication/login';
import * as listenersActions from '../../actions/listeners/listeners';
import {
  loginOrRegisterWithUidAndCreateHome as tuyaLogin,
  logout as tuyaLogout,
  renewSessionToken as tuyaRenewSessionToken,
} from '../../api/tuya/auth';
import { getCurrentUser as tuyaGetCurrentUser } from '../../api/tuya/user';
import helpers from '../../helpers';
import { getAllListeners } from '../../selectors/listeners';

export default function* loginFirebase(action) {
  yield put(loginActions.enableLoader());

  const { email, password } = action;

  const tuyaResponse = yield call(loginTuya, { email, password });
  if (tuyaResponse?.success) {
    yield put(loginActions.setDataAfterResponse(tuyaResponse.data));
  } else {
    const errorMessage = I18n.t(tuyaResponse?.errorMessage);
    yield put(loginActions.loginFailed(errorMessage));
  }
  yield put(loginActions.disableLoader({}));
}

export function* checkVerifiedUserExists(action) {
  const user = yield select(helpers.sagaSelectorHelper.getUser);
  const uid = path(['uid'], user);
  if (uid) {
    if (!action?.loginProcess) {
      // workaround for listeners
      // without this - listeners on android won't work after reopen app with active user session
      // as advantage, we have almost all time active user session
      // yield call(watchRenewTuyaSessionToken);
    }
    // helpers.tuyaHelper.turnOnNeedLoginListenerWithAction();
    yield call(navigateToMainTabNavigatorWithResetStack);
  } else {
    yield call(navigateToLoginWithResetStack);
  }
}

export function* showAlertMessageForOldAndroid() {
  const user = yield select(helpers.sagaSelectorHelper.getUser);
  if (user && user.metadata) {
    const {
      // eslint-disable-next-line no-unused-vars
      metadata: { lastSignInTime },
    } = user;
  }
}

export function* loginTuya({ email, password }) {
  yield put(loginActions.loginTuyaRequest());
  const responseTuya = yield call(tuyaLogin, email.toLowerCase(), password);
  const { success } = responseTuya;
  if (success) {
    yield put(loginActions.loginTuyaSuccess());
    yield call(showAlertMessageForOldAndroid);
    return responseTuya;
  } else {
    const errorMessage = yield put(
      loginActions.loginTuyaFailed(I18n.t('errorMessages.cloudAuthTuya')),
    );
    return { success, errorMessage };
  }
}

export function* watchRenewTuyaSessionToken() {
  const tuyaUserResponse = yield call(tuyaGetCurrentUser);
  const tuyaUserData = tuyaUserResponse?.data;
  const user = yield select(helpers.sagaSelectorHelper.getUser);
  if (tuyaUserData && user) {
    const { phoneCode, username } = tuyaUserData;
    const { uid } = user;
    const responseTuya = yield call(tuyaRenewSessionToken, phoneCode, username, uid);
    if (responseTuya.success) {
      yield put(loginActions.loginTuyaSuccess());
      return true;
    } else {
      yield put(loginActions.loginTuyaFailed(I18n.t('errorMessages.cloudAuthTuya')));
      return false;
    }
  }
}

export function* renewTuyaSessionAndReloadTheApp() {
  if (yield call(watchRenewTuyaSessionToken)) {
    RNRestart.Restart();
  }
}

export function* watchRemoveTuyaSessionExpListener() {
  const allListeners = yield select(getAllListeners);
  yield call(listenersActions.removeTuyaSessionExpListener, allListeners?.tuyaSessionExpListener);
}

export function* watchRemoveListenersOnLogout() {
  const allListeners = yield select(getAllListeners);
  yield put(listenersActions.removeTuyaSessionExpListener());
  const devicesListeners = allListeners?.devicesListeners;
  if (!isEmpty(devicesListeners)) {
    const deviceId = Object.keys(devicesListeners)?.[0];
    yield put(listenersActions.removeDeviceListener(deviceId, devicesListeners?.deviceId));
  }
  yield put(listenersActions.removeHubStatusListenerRequest());
  yield put(listenersActions.removeHubListListener());
}

export function* logoutForeignServices() {
  yield call(watchRemoveListenersOnLogout);
  yield call(tuyaLogout);
  yield call(navigateToLoginWithResetStack);
}

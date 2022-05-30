/* eslint-disable require-yield */
import { call } from 'redux-saga/effects';

import { checkVerifiedUserExists } from '../authentication/loginSaga';
import { getCountriesAndChangeAcceptedLanguageAsync } from '../localization/sagas';

export function* getUserInfo() {
  yield call(getCountriesAndChangeAcceptedLanguageAsync);
  yield call(checkVerifiedUserExists);
}

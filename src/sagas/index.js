import { all } from 'redux-saga/effects';

import authentication from './authentication';
import labels from './labels';
import localization from './localization';
import location from './location';
import profile from './profile';
import home from './home';

export default function* rootSaga() {
  yield all([...authentication, ...labels, ...localization, ...location, ...profile, ...home]);
}

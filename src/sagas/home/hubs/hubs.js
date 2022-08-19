import { path } from 'ramda';
import { call, put } from 'redux-saga/effects';

import * as listActions from '../../../actions/home/hubList';
import {
  getHubsList,
} from '../../../api/tuya/hubs';
import {
  reloadHubListAlert,
} from '../../../helpers/alertHelper';


export function* getHubsAsync() {
  yield put(listActions.getHubsListRequest());
  const response = yield call(getHubsList);
  const hubs = path(['data'], response) || [];
  if (!Array.isArray(hubs) || !hubs.length > 0) {
    reloadHubListAlert();
  }
  if (response.success) {
    yield put(listActions.getHubsListSuccess(hubs));
    yield put(listActions.setCurrentHub(hubs[0]));
  } else {
    yield put(listActions.getHubsListFailed());
  }
}

// Change listeners for new selected hub
export function* watchSetCurrentHub({ currentHub }) {
  // Save new current hub to store
  yield put(listActions.setCurrentHubSuccess(currentHub));
}

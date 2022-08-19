import { takeEvery, takeLatest } from 'redux-saga/effects';

import * as hubListTypes from '../../actionTypes/home/hubList';
import {
  getHubsAsync,
  watchSetCurrentHub,
} from './hubs/hubs';

export default [
  takeEvery(hubListTypes.GET_HUBS_LIST, getHubsAsync),
  takeLatest(hubListTypes.SET_CURRENT_HUB, watchSetCurrentHub),
];

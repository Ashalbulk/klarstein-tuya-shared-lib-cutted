import { takeEvery } from 'redux-saga/effects';

import * as types from '../../actionTypes/profile/user';
import { getUserInfo } from './user';

export default [takeEvery(types.GET_USER_INFO, getUserInfo)];

import { takeEvery } from 'redux-saga/effects';

import * as types from '../../actionTypes/labels/labels';
import getLabels from './labels';

export default [takeEvery(types.GET_LABELS, getLabels)];

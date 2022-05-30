import * as types from '../../actionTypes/labels/labels';

export function getLabels() {
  return {
    type: types.GET_LABELS,
  };
}

export function getLabelsSuccess(labels) {
  return {
    type: types.GET_LABELS_SUCCESS,
    labels,
  };
}

export function getLabelsFailed() {
  return {
    type: types.GET_LABELS_FAILED,
  };
}

import * as labelTypes from '../../actionTypes/labels/labels';
import createReducer from '../../lib/createReducer';

const initialState = {
  labels: {
    loading: false,
    labels: [],
  },
};

export default createReducer(initialState, {
  [labelTypes.GET_LABELS](state) {
    return {
      ...state,
      labels: {
        loading: true,
        labels: [],
      },
    };
  },
  [labelTypes.GET_LABELS_SUCCESS](state, { labels }) {
    return {
      ...state,
      labels: {
        loading: false,
        labels,
      },
    };
  },
  [labelTypes.GET_LABELS_FAILED](state) {
    return {
      ...state,
      labels: {
        loading: false,
      },
    };
  },
});

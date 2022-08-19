import * as types from '../../../actionTypes/home/hubList';
import createReducer from '../../../lib/createReducer';

const initialState = {
  listLoading: false,
  currentHub: null,
  hubs: [],
  listErrorMessage: null,
};

export default createReducer(initialState, {
  [types.HUBS_LIST_ENABLE_LOADER](state) {
    return {
      ...state,
      listLoading: true,
    };
  },
  [types.HUBS_LIST_DISABLE_LOADER](state) {
    return {
      ...state,
      listLoading: false,
    };
  },
  [types.GET_HUBS_LIST_REQUEST](state) {
    return {
      ...state,
      listErrorMessage: null,
    };
  },
  [types.SET_CURRENT_HUB_SUCCESS](state, { currentHub }) {
    return {
      ...state,
      currentHub,
    };
  },
  [types.GET_HUBS_LIST](state) {
    return {
      ...state,
    };
  },
  [types.GET_HUBS_LIST_SUCCESS](state, { hubs }) {
    return {
      ...state,
      hubs,
      listErrorMessage: null,
    };
  },
  [types.GET_HUBS_LIST_FAILED](state, { errorMessage }) {
    return {
      ...state,
      listErrorMessage: errorMessage,
    };
  },
});

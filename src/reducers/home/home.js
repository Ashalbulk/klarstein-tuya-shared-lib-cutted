import * as types from '../../actionTypes/home/home';
import createReducer from '../../lib/createReducer';

const initialState = {
  loading: false,
};

export default createReducer(initialState, {
  [types.HOME_ENABLE_LOADER](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [types.HOME_DISABLE_LOADER](state) {
    return {
      ...state,
      loading: false,
    };
  },
});

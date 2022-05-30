import * as types from '../../actionTypes/listeners/listeners';
import createReducer from '../../lib/createReducer';

const initialState = {
  tuyaSessionExpListener: null,
};

const reducers = {
  [types.ADD_TUYA_SESSION_EXP_LISTENER](state, { tuyaSessionExpListener }) {
    return {
      ...state,
      tuyaSessionExpListener,
    };
  },
  [types.REMOVE_TUYA_SESSION_EXP_LISTENER](state) {
    return {
      ...state,
      tuyaSessionExpListener: null,
    };
  },
};

export default createReducer(initialState, reducers);

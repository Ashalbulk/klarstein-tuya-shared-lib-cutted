import * as types from '../../actionTypes/home/home';
import { ID_FOR_GENERAL_ROOM } from '../../constants/general';
import createReducer from '../../lib/createReducer';

const initialState = {
  loading: false,
  weather: {},
  selectedRoomId: ID_FOR_GENERAL_ROOM,
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

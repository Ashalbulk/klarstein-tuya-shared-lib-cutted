import createReducer from '../../lib/createReducer';

const initialState = {
  user: null,
  loading: false,
  createErrorMessage: null,
};

export default createReducer(initialState, {});

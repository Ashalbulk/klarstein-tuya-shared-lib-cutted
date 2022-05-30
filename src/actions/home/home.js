import * as types from '../../actionTypes/home/home';

export function enableLoader() {
  return {
    type: types.HOME_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.HOME_DISABLE_LOADER,
  };
}

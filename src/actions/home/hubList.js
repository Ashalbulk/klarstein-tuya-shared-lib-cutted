import * as types from '../../actionTypes/home/hubList';

export function enableLoader() {
  return {
    type: types.HUBS_LIST_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.HUBS_LIST_DISABLE_LOADER,
  };
}

export function setCurrentHub(currentHub) {
  return {
    type: types.SET_CURRENT_HUB,
    currentHub,
  };
}

export function setCurrentHubSuccess(currentHub) {
  return {
    type: types.SET_CURRENT_HUB_SUCCESS,
    currentHub,
  };
}

export function getHubsList() {
  return {
    type: types.GET_HUBS_LIST,
  };
}

export function getHubsListRequest() {
  return {
    type: types.GET_HUBS_LIST_REQUEST,
  };
}

export function getHubsListSuccess(hubs) {
  return {
    type: types.GET_HUBS_LIST_SUCCESS,
    hubs,
  };
}

export function getHubsListFailed() {
  return {
    type: types.GET_HUBS_LIST_FAILED,
  };
}

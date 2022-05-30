import { path } from 'ramda';
import { createSelector } from 'reselect';

const getAuthTokenOfCurrentUser = state =>
  path(['authentication', 'login', 'klarsteinUser', 'authToken'], state);

export const getAuthToken = () => createSelector([getAuthTokenOfCurrentUser], token => token);

const getUserId = state => path(['authentication', 'login', 'user', 'uid'], state);

export const getUid = () => createSelector([getUserId], uid => uid);

const getUserLocalIp = state => path(['authentication', 'login', 'localIp'], state);

export const getLocalIp = createSelector([getUserLocalIp], localIp => localIp);

const getTuyaSessionExp = state => path(['listeners', 'tuyaSessionExpListener'], state);

export const getTuyaSessionExpListener = createSelector(
  [getTuyaSessionExp],
  tuyaSessionExpListener => tuyaSessionExpListener,
);

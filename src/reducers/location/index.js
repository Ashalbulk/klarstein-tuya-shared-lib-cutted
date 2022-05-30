import { combineReducers } from 'redux';

import address from './address';
import ip from './ip';
import location from './location';

export default combineReducers({
  ip,
  location,
  address,
});

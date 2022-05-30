import { path } from 'ramda';
import { getIpAddress } from 'react-native-device-info';
import { call, put, select } from 'redux-saga/effects';

import { getAddressFailed, getAddressSuccess } from '../../actions/location/address';
import { detectLocationByIpFailed, detectLocationByIpSuccess } from '../../actions/location/ip';
import { setLocalIpToStore } from '../../actions/location/ip';
import {
  detectLocationByDevicePositionFailed,
  detectLocationByDevicePositionSuccess,
  getLocationFailed,
} from '../../actions/location/location';
import ipApi from '../../api/ipapi';
import helpers from '../../helpers';
import {
  getAddress as getAddressAsync,
  getCountryCode,
  getLocationAsync as getLocation,
} from '../../helpers/locationHelper';
import { getLocalIp } from '../../selectors/authentication/login';
import { getCountries, getCurrentLanguage } from '../../selectors/languageAndContries';
import { changeAcceptedLanguage, getCountriesDataAsync } from '../localization/sagas';

export function* getAddress({ latitude, longitude }) {
  const response = yield call(getAddressAsync, latitude, longitude);
  if (response.success) {
    yield put(getAddressSuccess(response.result));
  } else {
    yield put(getAddressFailed(response));
  }
}

export function* getLocationAsync() {
  const currentLocalIp = yield call(getIpAddress);
  const previousLocalIp = yield select(getLocalIp);
  if (previousLocalIp === null || currentLocalIp !== previousLocalIp) {
    yield call(getCountriesDataAsync);
    yield put(setLocalIpToStore(currentLocalIp));
    const getLocationResponse = yield call(getLocation);
    const location = path(['result'], getLocationResponse);
    const latitude = path(['latitude'], location);
    const longitude = path(['longitude'], location);
    if (getLocationResponse.success) {
      const response = yield call(getCountryCode, latitude, longitude);
      const iniCountryCode = path(['countryCode'], response);
      if (response.success) {
        const iniLang = yield select(getCurrentLanguage);
        const countries = yield select(getCountries);
        const { language, countryCode } =
          helpers.languageHelper.extractLanguageAndCountryCodeFromCountries(
            iniLang,
            iniCountryCode,
            countries,
          );
        yield call(changeAcceptedLanguage, { language, countryCode });
      } else {
        yield put(getAddressFailed());
      }
    } else {
      yield put(getLocationFailed());
    }
  }
}

export function* getLocationByIp() {
  const response = yield call(ipApi.getLocationByIp);
  if (response.success) {
    yield put(detectLocationByIpSuccess(response));
  } else {
    yield put(detectLocationByIpFailed(response));
  }
}

export function* getLocationByDevicePosition() {
  const response = yield call(getLocation);
  if (response.success) {
    const {
      result: { longitude, latitude },
    } = response;
    const responseAddress = yield call(getAddressAsync, latitude, longitude);
    if (responseAddress.success) {
      response.result.address = responseAddress.result;
    }
    yield put(detectLocationByDevicePositionSuccess(response));
  } else {
    yield put(detectLocationByDevicePositionFailed(response));
  }
}

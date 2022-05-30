import { takeEvery } from 'redux-saga/effects';

import * as types from '../../actionTypes/localization/localization';
import getCountryByISOAsync, {
  changeAcceptedLanguage,
  getCountriesAndChangeAcceptedLanguageAsync,
  getCountriesDataAsync,
  watchChangeAcceptedLanguageSuccess,
} from './sagas';

export default [
  takeEvery(types.GET_COUNTRY_BY_ISO, getCountryByISOAsync),
  takeEvery(types.CHANGE_ACCEPTED_LANGUAGE_SUCCESS, watchChangeAcceptedLanguageSuccess),
  takeEvery(types.GET_COUNTRIES_DATA, getCountriesDataAsync),
  takeEvery(
    types.GET_COUNTRIES_AND_CHANGE_ACCEPTED_LANGUAGE,
    getCountriesAndChangeAcceptedLanguageAsync,
  ),
  takeEvery(types.CHANGE_ACCEPTED_LANGUAGE, changeAcceptedLanguage),
];

import I18n from 'i18next';
import { call, put, select, spawn } from 'redux-saga/effects';

import {
  changeAcceptedLanguageFailed,
  changeAcceptedLanguageSuccess,
  getCountryByISOSuccess,
  setAcceptedLanguage,
  setLanguage,
} from '../../actions/localization/localization';
import {
  ejectLanguageAndCountryCodeFromAcceptedLanguage,
  extractLanguageAndCountryCodeFromCountries,
} from '../../helpers/languageHelper';
import {
  getCountries,
  getCurrentAcceptedLanguage,
  getCurrentLanguage,
} from '../../selectors/languageAndContries';
import getLabels from '../labels/labels';

export default function* getCountryByISOAsync() {}

export function* getCountriesDataAsync() {}

export function* getCountriesAndChangeAcceptedLanguageAsync() {
  const acceptedLanguage = yield select(getCurrentAcceptedLanguage);
  const { language: iniLang, countryCode: iniCode } =
    ejectLanguageAndCountryCodeFromAcceptedLanguage(acceptedLanguage);
  yield call(getCountriesDataAsync);
  const countries = yield select(getCountries);
  const { country, language, countryCode } = extractLanguageAndCountryCodeFromCountries(
    iniLang,
    iniCode,
    countries,
  );
  yield put(getCountryByISOSuccess(country));
  yield call(changeAcceptedLanguage, { language, countryCode });
}

export function* changeAcceptedLanguage({ language = 'en', countryCode }) {
  try {
    yield spawn(getLabels, language);
    yield put(setLanguage(language));
    yield put(setAcceptedLanguage(`${language}_${countryCode}`));

    yield put(changeAcceptedLanguageSuccess());
  } catch (error) {
    yield put(changeAcceptedLanguageFailed());
  }
}

export function* watchChangeAcceptedLanguageSuccess() {
  const language = yield select(getCurrentLanguage);
  yield call(I18n.changeLanguage, language);
}

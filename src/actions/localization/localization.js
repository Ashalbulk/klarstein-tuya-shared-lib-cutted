import * as types from '../../actionTypes/localization/localization';

export function setLanguage(language) {
  return {
    type: types.SET_LANGUAGE,
    language,
  };
}

export function changeAcceptedLanguage(language, countryCode) {
  return {
    type: types.CHANGE_ACCEPTED_LANGUAGE,
    language,
    countryCode,
  };
}

export function changeAcceptedLanguageSuccess() {
  return {
    type: types.CHANGE_ACCEPTED_LANGUAGE_SUCCESS,
  };
}
export function changeAcceptedLanguageFailed() {
  return {
    type: types.CHANGE_ACCEPTED_LANGUAGE_FAILED,
  };
}

export function setAcceptedLanguage(acceptedLanguage) {
  return {
    type: types.SET_ACCEPTED_LANGUAGE,
    acceptedLanguage,
  };
}

export function getCountryByISO(iso) {
  return {
    type: types.GET_COUNTRY_BY_ISO,
    iso,
  };
}

export function getCountryByISOSuccess(data) {
  return {
    type: types.GET_COUNTRY_BY_ISO_SUCCESS,
    data,
  };
}

export function getCountryByISOFailed(error) {
  return {
    type: types.GET_COUNTRY_BY_ISO_FAILED,
    error,
  };
}

export function getCountriesData() {
  return {
    type: types.GET_COUNTRIES_DATA,
  };
}

export function getCountriesAndChangeAcceptedLanguage() {
  return {
    type: types.GET_COUNTRIES_AND_CHANGE_ACCEPTED_LANGUAGE,
  };
}

export function getCountriesDataSuccess(data) {
  return {
    type: types.GET_COUNTRIES_DATA_SUCCESS,
    data,
  };
}

export function getCountriesDataFailed(error) {
  return {
    type: types.GET_COUNTRIES_DATA_FAILED,
    error,
  };
}

import { find, path, propEq } from 'ramda';

import { DEFAULT_COUNTRY } from '../constants/general';

function ejectLanguageFromAcceptedLanguage(locale = 'de') {
  return locale.split('-').shift();
}

export function getSupportedLanguageForTuya(acceptedLanguage) {
  const language = ejectLanguageFromAcceptedLanguage(acceptedLanguage);
  switch (language) {
    case 'de':
    case 'fr':
    case 'sk':
    case 'it':
      return language;
    case 'es':
    case 'sp':
      return 'es'; // es is correct language code. Need to be fixed at backend (Currently backend expect to have sp).
    default:
      return 'en';
  }
}

export function extractLanguageAndCountryCodeFromCountries(language, countryCode, countries) {
  const country =
    find(propEq('isoCode', countryCode))(countries) ||
    find(propEq('isoCode', DEFAULT_COUNTRY))(countries);
  const countryCodeToSet = path(['isoCode'], country) || DEFAULT_COUNTRY;
  const languages = path(['languages'], country) || [];
  const foundedLanguage =
    find(propEq('isoCode', language))(languages) || find(propEq('isoCode', 'en'))(languages);
  const languageToSet =
    path(['isoCode'], foundedLanguage) || path(['defaultLanguage', 'isoCode'], country);
  return { country, language: languageToSet, countryCode: countryCodeToSet };
}

export function ejectLanguageAndCountryCodeFromAcceptedLanguage(language = 'de') {
  // en-us de-de etc.
  // https://www.science.co.il/language/Locale-codes.php
  const acceptedLanguage = language.split('_');
  if (acceptedLanguage[0]?.length > 2) {
    const acceptedLanguage = language.split('-');
    return { language: acceptedLanguage[0] ?? 'en', countryCode: 'DE' }; // handle old users with en-US
  }
  return {
    language: acceptedLanguage[0] ?? 'en',
    countryCode: acceptedLanguage[1] ?? 'DE',
  };
}

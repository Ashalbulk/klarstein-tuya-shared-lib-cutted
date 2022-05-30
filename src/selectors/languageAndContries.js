import { path } from 'ramda';
import { createSelector } from 'reselect';

const getLanguage = state => path(['localization', 'language'], state);
const getAcceptedLanguage = state => path(['localization', 'acceptedLanguage'], state);
const getCountriesFromState = state => path(['localization', 'countries'], state);

export const getCurrentLanguage = createSelector([getLanguage], language => language);

export const getCurrentAcceptedLanguage = createSelector(
  [getAcceptedLanguage],
  acceptedLanguage => acceptedLanguage,
);

export const getLanguages = createSelector([getLanguage], languages => languages);

export const getCountries = createSelector([getCountriesFromState], countries => countries);

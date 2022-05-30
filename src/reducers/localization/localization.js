import * as RNLocalize from 'react-native-localize';

import * as types from '../../actionTypes/localization/localization';
import createReducer from '../../lib/createReducer';

const defaultLanguage = RNLocalize.getLocales()[0].languageCode;
const initialState = {
  loading: false,
  language: defaultLanguage,
  languages: [],
  currentCountry: null,
  acceptedLanguage: `${defaultLanguage}_DE`,
  countries: [
    {
      isoCode: 'DE',
      defaultLanguage: {
        isoCode: 'en',
      },
    },
  ],
};

const reducers = {
  [types.SET_LANGUAGE](state, { language }) {
    return {
      ...state,
      language,
    };
  },
  [types.SET_ACCEPTED_LANGUAGE](state, { acceptedLanguage }) {
    return {
      ...state,
      acceptedLanguage,
    };
  },
  [types.GET_COUNTRY_BY_ISO_SUCCESS](state, { data }) {
    return {
      ...state,
      currentCountry: data,
    };
  },
  [types.GET_COUNTRIES_DATA_SUCCESS](state, { data }) {
    return {
      ...state,
      countries: data,
    };
  },
  [types.CHANGE_ACCEPTED_LANGUAGE](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [types.CHANGE_ACCEPTED_LANGUAGE_SUCCESS](state) {
    return {
      ...state,
      loading: false,
    };
  },
  [types.CHANGE_ACCEPTED_LANGUAGE_FAILED](state) {
    return {
      ...state,
      loading: false,
    };
  },
};

export default createReducer(initialState, reducers);

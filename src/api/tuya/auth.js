import ipApi from '../../api/ipapi';
import helpers from '../../helpers';
import * as TuyaUserApi from '../../tuya-sdk/lib/TuyaUserApi';

export const loginOrRegisterWithUidAndCreateHome = (uid, password) => {
  const url = ipApi.getCountryCodeUrl();
  return fetch(url)
    .then(response => (response.status !== 200 ? undefined : response.text()))
    .then(code => {
      const countryCode = code ? code.replace('+', '') : '49';
      return TuyaUserApi.loginOrRegisterWithUidAndCreateHome({
        uid,
        password,
        countryCode,
        isCreateHome: true,
      })
        .then(data => {
          return { success: true, data };
        })
        .catch(helpers.apiHelper.handleError);
    });
};

export const renewSessionToken = (countryCode = '49', uid, password) => {
  return TuyaUserApi.loginOrRegisterWithUid({
    uid,
    password,
    countryCode,
  })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const logout = () => {
  TuyaUserApi.logout();
};

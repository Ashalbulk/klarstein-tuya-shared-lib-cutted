import helpers from '../../helpers';
import TuyaUserApi from '../../tuya-sdk/lib/TuyaUserApi';

export const getCurrentUser = () => {
  return TuyaUserApi.getUser()
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

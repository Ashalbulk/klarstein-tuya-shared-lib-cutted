import reactotron from 'reactotron-react-native';

import * as TuyaCoreApi from '../../tuya-sdk/lib/TuyaCoreApi';
import * as TuyaSkillQuickBindBizBundle from '../../tuya-sdk/lib/TuyaSkillQuickBindBizBundle';

export const goToAmazonAlexaLink = () => {
  return TuyaSkillQuickBindBizBundle.goToAmazonAlexaLink()
    .then(data => {
      reactotron.log('data', data);
      return {
        success: true,
        data,
      };
    })
    .catch((e) => reactotron.log('e', e));
};

export const obtainAmazonUrl = () => {
  return TuyaCoreApi.apiRequest({
    apiName: 'tuya.proxy.amazon.obtainAmazonUrl',
    version: '1.0',
    withoutSession: false,
    postData: {},
  })
    .then(data => {
      return { success: true, data };
    })
    .catch(() => {
      // console.log('e', e)
    });
};

export const bindingAlexaAccount = () => {
  return TuyaCoreApi.apiRequest({
    apiName: 'tuya.proxy.amazon.bindingAlexaAccount',
    version: '1.0',
    withoutSession: false,
    postData: {
      amazonCode: 'ANLyCralJZdRAPUBrxqt',
    },
  })
    .then(data => {
      // console.log('data', data);
      return { success: true, data };
    })
    .catch(() => {
      // console.log('e', e)
    });
};

import helpers from '../../helpers';
import * as TuyaBizBundleModule from '../../tuya-sdk/lib/TuyaBizBundleModule';

export const goToAmazonAlexaLink = homeId => {
  return TuyaBizBundleModule.goToAmazonAlexaLink(homeId)
    .then(data => {
      return {
        success: true,
        data,
      };
    })
    .catch(helpers.apiHelper.handleError);
};

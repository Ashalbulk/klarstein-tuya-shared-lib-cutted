const TuyaBizBundle = require('react-native').NativeModules.TuyaBizBundleModule;

const TuyaBizBundleModule = {
  goToAmazonAlexaLink(homeId) {
    return TuyaBizBundle.goToAmazonAlexaLink({ homeId });
  },

  goToGoogleAssitantLink(params) {
    return TuyaBizBundle.goToGoogleAssitantLink(params);
  },
};

module.exports = TuyaBizBundleModule;

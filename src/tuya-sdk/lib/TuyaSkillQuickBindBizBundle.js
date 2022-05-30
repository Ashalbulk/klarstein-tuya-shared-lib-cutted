const SkillQuickBindBizBundle = require('react-native').NativeModules.SkillQuickBindBizBundle;

const TuyaSkillQuickBindBizBundle = {
  goToAmazonAlexaLink() {
    return SkillQuickBindBizBundle.goToAmazonAlexaLink();
  },

  goToGoogleAssitantLink(params) {
    return SkillQuickBindBizBundle.goToGoogleAssitantLink(params);
  },
};

module.exports = TuyaSkillQuickBindBizBundle;

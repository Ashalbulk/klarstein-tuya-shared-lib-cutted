import helpers from '../../helpers';
import * as TuyaCoreApi from '../../tuya-sdk/lib/TuyaCoreApi';

export const getRecipesListByProductId = (productId, language, categoryId) => {
  const lang = helpers.languageHelper.getSupportedLanguageForTuya(language);
  return TuyaCoreApi.apiRequest({
    apiName: 'tuya.m.menu.lang.list',
    version: '1.0',
    withoutSession: false,
    postData: {
      queryJson: {
        productId,
        lang,
        categoryId,
        pageNo: 0,
        pageSize: 500,
      },
    },
  })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const getRecipesCategoriesListByProductId = (pid, language) => {
  const lang = helpers.languageHelper.getSupportedLanguageForTuya(language);
  return TuyaCoreApi.apiRequest({
    apiName: 'tuya.industry.cookbook.category.search',
    version: '1.0',
    withoutSession: false,
    postData: {
      pid,
      lang,
    },
  })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const getRecipeDetailsForDevices = (menuId, language) => {
  const lang = helpers.languageHelper.getSupportedLanguageForTuya(language);
  return TuyaCoreApi.apiRequest({
    apiName: 'tuya.m.menu.get',
    version: '1.0',
    withoutSession: false,
    postData: {
      lang,
      menuId,
    },
  })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

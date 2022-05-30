import AsyncStorage from '@react-native-async-storage/async-storage';
import * as R from 'ramda';

let globalLabels = {};

const labelsConvertor = labels => {
  let res = {};
  for (let language in labels) {
    res[language] = R.mergeAll(
      labels[language].map(labelObject => {
        let result = {};
        result[labelObject.labelPath] = labelObject.translation.content;
        return { ...result };
      }),
    );
  }
  return res;
};

export const saveLabels = async (labels, language) => {
  let value = await AsyncStorage.getItem('labels');
  value = JSON.parse(value);
  const updatedLabels = { ...value, ...{ [language]: labels } };

  await AsyncStorage.setItem('labels', JSON.stringify(updatedLabels));
  const result = labelsConvertor({ [language]: labels });
  globalLabels = { ...globalLabels, ...result };
};

export const fetchLabels = async () => {
  const value = await AsyncStorage.getItem('labels');
  const result = labelsConvertor(JSON.parse(value));
  globalLabels = { ...globalLabels, ...result };
  return result;
};

export const getLabels = () => globalLabels;

fetchLabels();

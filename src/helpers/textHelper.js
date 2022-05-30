export const removeTags = (text = '') => {
  return text.replace(/<[^>]+?>/g, '');
};

export const makeCopilotIdFromLabel = lableId => {
  return lableId?.toString().toLowerCase().replace(/\W/g, '');
};

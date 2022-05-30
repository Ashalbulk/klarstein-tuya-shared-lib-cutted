const swipeableCloseAll = (currentElementId, refs) => {
  Object.keys(refs).map(id => {
    if (refs[id] && currentElementId !== id) {
      refs[id].close();
    }
  });
};

const swipeableOpenAll = (currentElementId, refs) => {
  Object.keys(refs).map(id => {
    if (refs[id] && currentElementId !== id) {
      refs[id].openRight();
    }
  });
};

const swipeableOpen = (currentElementId, refs) => {
  refs[currentElementId].openRight();
};

const updateSwipeableRef = (ref, currentElementId, refs) => {
  refs[currentElementId] = ref;
};

export { swipeableCloseAll, swipeableOpen, swipeableOpenAll, updateSwipeableRef };

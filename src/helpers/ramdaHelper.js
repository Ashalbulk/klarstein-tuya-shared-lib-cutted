import * as R from 'ramda';

export const mergeArraysByKey = key =>
  R.pipe(R.map(R.indexBy(R.prop(key))), R.reduce(R.mergeWith(R.mergeLeft), {}), R.values);

export const range = (start, stop, step = 1) =>
  Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);

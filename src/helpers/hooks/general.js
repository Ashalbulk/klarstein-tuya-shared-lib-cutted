import { useCallback, useEffect, useRef } from 'react';

export const useMount = func => useEffect(func, []);

export const useKeyExtractor = fieldName =>
  useCallback((item, index) => item?.[fieldName] ?? index, [fieldName]);

export const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

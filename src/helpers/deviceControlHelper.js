import {
  DEGREE_ICON_C,
  DEGREE_ICON_F,
  DEGREE_MEASURE_C,
  DEGREE_MEASURE_F,
} from '../constants/general';

export function calculatePercentage(max, min, current) {
  const range = max - min;
  const correctedStartValue = current - min;
  return (correctedStartValue * 100) / range;
}

export function stepToPecentage(max, min, step) {
  return (100 / (max - min)) * step;
}

export function calculateValueFromPercentage(max, min, percentage) {
  return Math.round(((max - min) * percentage) / 100) + min;
}

export function getTemperatureMeasureAndIcon(measureDps) {
  let measure = null;
  if (measureDps === DEGREE_MEASURE_C || measureDps === DEGREE_MEASURE_F) {
    measure = measureDps === DEGREE_MEASURE_C ? DEGREE_MEASURE_C : DEGREE_MEASURE_F;
  } else if (measureDps === true || measureDps === false) {
    measure = measureDps === false ? DEGREE_MEASURE_C : DEGREE_MEASURE_F;
  } else if (measureDps === 'c' || measureDps === 'f') {
    measure = measureDps === 'c' ? DEGREE_MEASURE_C : DEGREE_MEASURE_F;
  }
  const measureIcon = measure === DEGREE_MEASURE_F ? DEGREE_ICON_F : DEGREE_ICON_C;
  return { measure, measureIcon };
}

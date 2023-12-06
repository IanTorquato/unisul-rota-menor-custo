import { getDecimalPart } from './getDecimalPart';

export function formatHour(hour: number, alwaysShowMinIndication = false) {
  if (hour >= 1) {
    const decimalPart = getDecimalPart(hour);

    return `${Math.floor(hour)}h${decimalPart ? (decimalPart * 60).toFixed(0).replace(/^([0-9])$/, '0$1') + (alwaysShowMinIndication ? 'min' : '') : ''}`;
  }

  return `${(hour * 60).toFixed(0)}min`;
}

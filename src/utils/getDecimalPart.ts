export function getDecimalPart(value: number) {
  return Number((value % 1).toFixed(2));
}

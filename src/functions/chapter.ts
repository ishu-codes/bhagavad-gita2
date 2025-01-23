export function getDoubleDigit(number: string) {
  const num = parseInt(number);
  return num < 10 ? `0${num}` : `${num}`;
}

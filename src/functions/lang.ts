export const getLangNum = (num: number | string, numerals: string[]) => {
  let result_num = "";
  for (const n of `${num}`.replace(/^0*/, "")) {
    result_num += numerals[parseInt(n)];
  }
  return result_num;
};

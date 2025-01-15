export const getLangNum = (num: number | string, numerals: string[]) => {
  let result_num = "";
  if (!numerals) {
    return num.toString();
  }
  for (const n of `${num}`.replace(/^0*/, "").replace(/-0*/, "-")) {
    if (n.match(/\d/)) result_num += numerals[parseInt(n)];
    else result_num += ` ${n} `;
  }
  return result_num;
};

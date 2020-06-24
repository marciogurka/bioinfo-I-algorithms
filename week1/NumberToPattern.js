import NumberToSymbol from "./NumberToSymbol";

/**
 *
 *
 * @param {Number} index
 * @param {Number} k
 * @returns
 */
function NumberToPattern(index, k) {
  if (k === 1) return NumberToSymbol(index);
  const prefixIndex = Math.floor(index / 4);
  const remainder = index % 4;
  const symbol = NumberToSymbol(remainder);
  const prefixPattern = NumberToPattern(prefixIndex, k - 1);
  return prefixPattern.concat(symbol);
}

// console.log(NumberToPattern(5437, 7));

export default NumberToPattern;

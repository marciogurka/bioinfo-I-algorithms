import NumberToSymbol from "./NumberToSymbol";

/**
 * @description Convert the number to a respective pattern.
 *
 * @param {Number} index - The value that will be converted
 * @param {Number} k - The k-mer that will be used to convert
 * @returns The pattern that represents the number.
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

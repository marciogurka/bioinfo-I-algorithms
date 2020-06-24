/**
 * @description Convert the symbol to a number
 *
 * @param {String} symbol - The nucleotide that will be converted
 * @returns The number that represents the nucleotide
 */
function SymbolToNumber(symbol) {
  switch (symbol.toUpperCase()) {
    case "A":
      return 0;
    case "C":
      return 1;
    case "G":
      return 2;
    case "T":
      return 3;
    default:
      return 0;
  }
}

export default SymbolToNumber;

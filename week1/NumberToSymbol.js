/**
 *
 *
 * @param {Number} number - The index of the nucleotide
 * @returns The char that represents the nucleotide
 */
function NumberToSymbol(number) {
  switch (number) {
    case 0:
      return "A";
    case 1:
      return "C";
    case 2:
      return "G";
    case 3:
      return "T";
    default:
      return "X";
  }
}

export default NumberToSymbol;

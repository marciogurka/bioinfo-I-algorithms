import ComputingFrequencies from "./ComputingFrequencies";
import NumberToPattern from "./NumberToPattern";
/**
 * @function Object - Returns all the patterns by size and the most common patterns
 *
 * @param {String} genome - The genome string that will be processed
 * @param {Number} k - The pattern size that will be searched
 * @returns Object with all the info about the processed DNA chain
 */
function FasterFrequentWords(genome, k) {
  const frequentPatterns = new Set();
  const frequencyArray = ComputingFrequencies(genome, k);
  const maxCount = frequencyArray.reduce(function (p, v) {
    return p > v ? p : v;
  }, 0);

  for (let i = 0; i <= Math.pow(4, k) - 1; i++) {
    if (frequencyArray[i] === maxCount) {
      const pattern = NumberToPattern(i, k);
      frequentPatterns.add(pattern);
    }
  }

  return {
    frequentPatterns,
    frequentPatternsFormatted: Array.from(frequentPatterns).join(" "),
  };
}

// Example
// const text =
//   "GCACTAAAGCACCAGCGAGACTAGACAGTGCCTTACGCTGTATAGGGATAAAAGTTGTCAAGATGACTTGCGGGAATCGTTAGGCTGACACGCACTAATGCTCGCCTTCCGGGTGTTCTGTGAGTACGGTTGATCACGGTCGCCCTGCGGATGTACTACCATGAAAGTTGATCACGTGCCGCGCGCTCCCTAAGCTTAGAAGTTTGCACAATCTGCATTCTATCCTGCCACGCCTTCAATAATAAGTGGTGTATGCAATTTGGAGTCGATCTGGGAACCAACGATTAACTTGGGAAGTGGCTATATCAAAATACGATGTCTTCAGCGTCGCGGTC";
// const result = FasterFrequentWords(text, 4);
// console.log(result);

export default FasterFrequentWords;

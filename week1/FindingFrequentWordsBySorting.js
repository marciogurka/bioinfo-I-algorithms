import PatternToNumber from "./PatternToNumber";
import NumberToPattern from "./NumberToPattern";


/**
 * @description Find all frequencies of a DNA sequence
 *
 * @param {String} genome - The genome string that will be processed
 * @param {Number} k - Size of the pattern to be searched
 * @returns All frequences from the genome
 */
function FindingFrequentWordsBySorting(genome, k) {
  const frequentPatterns = new Set();
  const index = [];
  const count = [];
  for (let i = 0; i <= genome.length - k; i++) {
    const pattern = genome.substr(i, k);
    index[i] = PatternToNumber(pattern);
    count[i] = 1;
  }
  const sortedIndex = index.sort((a, b) => (a > b ? 1 : -1));
  for (let i = 1; i <= genome.length - k; i++) {
    if (sortedIndex[i] === sortedIndex[i - 1]) {
      count[i] = count[i - 1] + 1;
    }
  }

  const maxCount = count.reduce(function (p, v) {
    return Math.max(p, v);
  }, 0);

  for (let i = 1; i <= genome.length - k; i++) {
    if (count[i] === maxCount) {
      const pattern = NumberToPattern(sortedIndex[i], k);
      frequentPatterns.add(pattern);
    }
  }
  return frequentPatterns;
}

// Example
// const text =
//   "GCACTAAAGCACCAGCGAGACTAGACAGTGCCTTACGCTGTATAGGGATAAAAGTTGTCAAGATGACTTGCGGGAATCGTTAGGCTGACACGCACTAATGCTCGCCTTCCGGGTGTTCTGTGAGTACGGTTGATCACGGTCGCCCTGCGGATGTACTACCATGAAAGTTGATCACGTGCCGCGCGCTCCCTAAGCTTAGAAGTTTGCACAATCTGCATTCTATCCTGCCACGCCTTCAATAATAAGTGGTGTATGCAATTTGGAGTCGATCTGGGAACCAACGATTAACTTGGGAAGTGGCTATATCAAAATACGATGTCTTCAGCGTCGCGGTC";
// const result = FindingFrequentWordsBySorting(text, 4);
// console.log(result);

export default FindingFrequentWordsBySorting;

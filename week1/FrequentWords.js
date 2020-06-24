/**
 * @function Object - Returns all the patterns by size and the most common patterns
 *
 * @param {String} genome - The genome string that will be processed
 * @param {Number} k - The pattern size that will be searched
 * @returns Object with all the info about the processed genome
 */
function FrequentWords(genome, k) {
  const frequentPatterns = {};
  const textSize = genome.length;
  for (let i = 0; i <= textSize - k; i++) {
    const pattern = genome.substring(i, i + k);
    if (!frequentPatterns[pattern]) frequentPatterns[pattern] = 0;
    frequentPatterns[pattern]++;
  }

  // sorting the result
  keysSorted = Object.keys(frequentPatterns).sort(function (a, b) {
    return frequentPatterns[b] - frequentPatterns[a];
  });
  const orderedPatterns = {};
  keysSorted.forEach((key) => {
    orderedPatterns[key] = frequentPatterns[key];
  });

  // Getting the max and min value
  let arr = Object.values(frequentPatterns);
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  const mostFrequentPatterns = Object.keys(frequentPatterns).filter(
    (key) => frequentPatterns[key] === max
  );
  return {
    frequentPatterns,
    orderedPatterns,
    min,
    max,
    mostFrequentPatterns: mostFrequentPatterns.join(" "),
  };
}

// Example
// const text =
//   "GCACTAAAGCACCAGCGAGACTAGACAGTGCCTTACGCTGTATAGGGATAAAAGTTGTCAAGATGACTTGCGGGAATCGTTAGGCTGACACGCACTAATGCTCGCCTTCCGGGTGTTCTGTGAGTACGGTTGATCACGGTCGCCCTGCGGATGTACTACCATGAAAGTTGATCACGTGCCGCGCGCTCCCTAAGCTTAGAAGTTTGCACAATCTGCATTCTATCCTGCCACGCCTTCAATAATAAGTGGTGTATGCAATTTGGAGTCGATCTGGGAACCAACGATTAACTTGGGAAGTGGCTATATCAAAATACGATGTCTTCAGCGTCGCGGTC";
// const result = FrequentWords(text, 4);
// console.log(result);

export default FrequentWords;

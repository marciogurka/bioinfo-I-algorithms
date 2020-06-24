/**
 * @function Number - Returns the number of times that the patterns occurs in the DNA chain
 *
 * @param {String} chain - The DNA chain string
 * @param {String} pattern - The pattern that will be searched
 * @returns Returns the number of times that the patterns occurs in the string
 */
function PatternCount(chain, pattern) {
  let count = 0;
  for (let i = 0; i <= chain.length - pattern.length; i++) {
    if (chain.substring(i, i + pattern.length) === pattern) {
      count++;
    }
  }
  return count;
}

// Example
// const pCount = PatternCount("ATGACTTCGCTGTTACGCGC", "CGC");
// console.log(pCount);

export default PatternCount;

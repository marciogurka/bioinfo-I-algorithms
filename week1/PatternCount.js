/**
 * @description Count the frequencies of a pattern in a genome
 *
 * @param {String} chain - The genome string
 * @param {String} pattern - The pattern that will be searched
 * @returns The number of times that the pattern occurs in the string.
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

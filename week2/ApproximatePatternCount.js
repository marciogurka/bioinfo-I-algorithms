import HammingDistance from './HammingDistance';

/**
 * @description Find the number of occurrences of a pattern in a string
 *
 * @param {String} text - Text to be processed
 * @param {String} pattern - Pattern to be searched
 * @param {Number} d - Max number of possible mismatches
 * @returns The number of times where pattern appears as a substring of text with at most d mismatches.
 */
function ApproximatePatternCount(text, pattern, d) {
	let count = 0;
	for (let i = 0; i <= text.length - pattern.length; i += 1) {
		const subPattern = text.substr(i, pattern.length);
		if (HammingDistance(pattern, subPattern) <= d) {
			count += 1;
		}
	}
	return count;
}

export default ApproximatePatternCount;

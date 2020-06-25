import HammingDistance from './HammingDistance';

/**
 * @description Find all approximate occurrences of a pattern in a string
 *
 * @param {String} text - Text to be processed
 * @param {String} pattern - Pattern to be searched
 * @param {Number} d - Max number of possible mismatches
 * @returns All starting positions where pattern appears as a substring of text with at most d mismatches.
 */
function ApproximatePatternMatchingProblem(text, pattern, d) {
	const matchPositions = [];
	for (let i = 0; i <= text.length - pattern.length; i += 1) {
		const subPattern = text.substr(i, pattern.length);
		if (HammingDistance(pattern, subPattern) <= d) {
			matchPositions.push(i);
		}
	}
	return matchPositions;
}

export default ApproximatePatternMatchingProblem;

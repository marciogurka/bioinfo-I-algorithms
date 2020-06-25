import Neighbors from './Neighbors';
import ApproximatePatternCount from './ApproximatePatternCount';
import PatternToNumber from '../week1/PatternToNumber';
import NumberToPattern from '../week1/NumberToPattern';

/**
 * @description Find the most frequent k-mers with mismatches in a string.
 *
 * @param {String} text - The text that will be processed
 * @param {Number} k - The size of pattern that will be searched
 * @param {Number} d - The max number of mismatches in text
 * @returns All most frequent k-mers with up to d mismatches in text.
 */
function FrequentWordsWithMismatches(text, k, d) {
	const frequentPatterns = new Set();
	const close = [];
	const frequencyArray = [];
	for (let i = 0; i <= 4 ** k - 1; i += 1) {
		close[i] = false;
		frequencyArray[i] = 0;
	}
	for (let i = 0; i <= text.length - k; i += 1) {
		const neighborhood = Neighbors(text.substr(i, k), d);
		neighborhood.forEach((neighbor) => {
			const index = PatternToNumber(neighbor);
			close[index] = true;
		});
	}

	for (let i = 0; i <= 4 ** k - 1; i += 1) {
		if (close[i]) {
			const pattern = NumberToPattern(i, k);
			frequencyArray[i] = ApproximatePatternCount(text, pattern, d);
		}
	}
	const maxCount = Math.max(...frequencyArray);
	for (let i = 0; i <= 4 ** k - 1; i += 1) {
		if (frequencyArray[i] === maxCount) {
			const pattern = NumberToPattern(i, k);
			frequentPatterns.add(pattern);
		}
	}

	return frequentPatterns;
}

export default FrequentWordsWithMismatches;

import Neighbors from './Neighbors';
import PatternToNumber from '../week1/PatternToNumber';
import NumberToPattern from '../week1/NumberToPattern';
/**
 * @description Find the most frequent k-mers with mismatches in a string. (Optimized)
 *
 * @param {String} text - The text that will be processed
 * @param {Number} k - The size of pattern that will be searched
 * @param {Number} d - The max number of mismatches in text
 * @returns All most frequent k-mers with up to d mismatches in text.
 */
function FrequentWordsWithMismatchesBySorting(text, k, d) {
	const frequentPatterns = new Set();
	const neighborhoods = [];
	const index = [];
	const count = [];
	for (let i = 0; i <= text.length - k; i += 1) {
		neighborhoods[i] = Neighbors(text.substr(i, k), d);
	}
	const neighborhoodArray = [];
	neighborhoods.forEach((neighbors) => {
		neighborhoodArray.push(...Array.from(neighbors));
	});
	for (let i = 0; i <= neighborhoodArray.length - 1; i += 1) {
		const pattern = neighborhoodArray[i];
		index[i] = PatternToNumber(pattern);
		count[i] = 1;
	}
	const sortedIndex = index.sort((a, b) => a - b);
	for (let i = 0; i <= neighborhoodArray.length - 1; i += 1) {
		if (sortedIndex[i] === sortedIndex[i + 1]) count[i + 1] = count[i] + 1;
	}
	const maxCount = Math.max(...count);
	for (let i = 0; i <= neighborhoodArray.length - 1; i += 1) {
		if (count[i] === maxCount) {
			const pattern = NumberToPattern(sortedIndex[i], k);
			frequentPatterns.add(pattern);
		}
	}

	return frequentPatterns;
}

export default FrequentWordsWithMismatchesBySorting;

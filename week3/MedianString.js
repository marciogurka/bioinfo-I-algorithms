import NumberToPattern from '../week1/NumberToPattern';
import DistanceBetweenPatternsAndStrings from './DistanceBetweenPatternsAndStrings';

/**
 * @description Find a median string
 *
 * @param {Array} dna - A collection of DNAs
 * @param {Integer} k - The size of the median string
 * @returns a *k*-mer pattern minimizing *d(pattern,DNA)* among all *k*-mers Pattern
 */
function MedianString(dna, k) {
	let distance = Infinity;
	let median;
	const medians = [];
	for (let i = 0; i <= 4 ** k - 1; i += 1) {
		const pattern = NumberToPattern(i, k);
		const distancePattern = DistanceBetweenPatternsAndStrings(pattern, dna);
		if (distance >= distancePattern) {
			distance = distancePattern;
			median = pattern;
			medians.push(pattern);
		}
	}
	return { median, medians };
}

export default MedianString;

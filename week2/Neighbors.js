import HammingDistance from './HammingDistance';

/**
 * @description Generate all d-neighborhood from a pattern.
 *
 * @param {String} pattern - Text that will be processed
 * @param {Number} d - Max number of possible mismatches
 * @returns A set with all possible k-mers whose Hamming distances from pattern does not exceed d.
 */
function Neighbors(pattern, d) {
	if (d === 0) {
		return new Set(pattern);
	}
	if (pattern.length === 1) {
		return new Set(['A', 'C', 'G', 'T']);
	}
	const neighborhood = new Set();
	const firstSymbol = pattern.charAt(0);
	const suffix = pattern.substr(1, pattern.length - 1);
	const suffixNeighborhood = Neighbors(suffix, d);
	suffixNeighborhood.forEach((string) => {
		if (HammingDistance(suffix, string) < d) {
			['A', 'C', 'G', 'T'].forEach((nt) => {
				neighborhood.add(`${nt}${string}`);
			});
		} else {
			neighborhood.add(`${firstSymbol}${string}`);
		}
	});
	return neighborhood;
}

export default Neighbors;

import HammingDistance from '../week2/HammingDistance';

/**
 * @description Finds the sum of distances between a Pattern in a collection of strings
 *
 * @param {String} pattern - The pattern that will be searched
 * @param {Array} dna - The array of DNA chains that will be looked into
 * @returns The sum of distances between *pattern* and *dna*
 */
function DistanceBetweenPatternsAndStrings(pattern, dna) {
	const k = pattern.length;
	let distance = 0;
	for (let i = 0; i <= dna.length - 1; i += 1) {
		const dnaChain = dna[i];
		let hammingDistance = Infinity;
		for (let j = 0; j <= dnaChain.length - k; j += 1) {
			const kmer = dnaChain.substr(j, k);
			const patternHammingDistance = HammingDistance(pattern, kmer);
			if (hammingDistance > patternHammingDistance) hammingDistance = patternHammingDistance;
		}
		distance += hammingDistance;
	}

	return distance;
}

export default DistanceBetweenPatternsAndStrings;

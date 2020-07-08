import Neighbors from '../week2/Neighbors';

/**
 * @description Finds all (*k*,*d*)-motifs in a collection of strings
 *
 * @param {Array} dna - A collection of strings
 * @param {Number} k - The size of the motifs
 * @param {Number} d - The max of mismatches allowed between the *k*-mer and the chain
 * @returns All (*k*,*d*)-motifs in *dna*
 */
function MotifEnumeration(dna, k, d) {
	const patterns = [];
	const kmers = {};
	for (let i = 0; i <= dna.length - 1; i += 1) {
		const dnaChain = dna[i];
		let neighborhoods = [];
		const neighborhoodSet = new Set();
		// Getting all the k-mers from the chains
		for (let j = 0; j <= dnaChain.length - k; j += 1) {
			neighborhoods = Neighbors(dnaChain.substr(j, k), d);
			neighborhoods.forEach((neighbor) => {
				neighborhoodSet.add(neighbor);
			});
		}
		// Checking how how many times the k-mer is present in the chains
		neighborhoodSet.forEach((neighbor) => {
			if (!kmers[neighbor]) kmers[neighbor] = 0;
			kmers[neighbor] += 1;
		});
	}

	const max = dna.length;
	// If the k-mer is present in all the chains, is a motif
	Object.keys(kmers).forEach((kmer) => {
		if (kmers[kmer] === max) {
			patterns.push(kmer);
		}
	});

	return patterns;
}

export default MotifEnumeration;

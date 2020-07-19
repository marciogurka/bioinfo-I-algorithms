/**
 * @description Generate random motifs of a DNA chain
 *
 * @param {Array} dna - Array of strings that will be processed
 * @param {Number} k - size of the k-mer that will be searched
 * @param {Number} t - number of chains that the dna have
 * @returns A array of random motifs
 */
function GenerateRandomMotifs(dna, k, t) {
	const chainLength = dna[0].length;
	const motifs = [];
	for (let i = 0; i < t; i += 1) {
		const index = Math.floor(Math.random() * (chainLength - k));
		motifs[i] = dna[i].substr(index, k);
	}
	return motifs;
}

export default GenerateRandomMotifs;

import ProfileMatrixWithLaplace from './ProfileMatrixWithLaplace';
import ProfileMostProbableKmer from './ProfileMostProbableKmer';
import Score from './Score';

/**
 * @description Find a Profile-most probable k-mer in a string
 * (using Laplace Rule of Succession for optimization)
 *
 * @param {Array} dna - Array of strings that will be processed
 * @param {Number} k - size of the k-mer that will be searched
 * @param {Number} t - number of chains that the dna have
 * @returns The profile most-probable k-mer(s)
 */
function ImprovedGreedyMotifSearch(dna, k, t) {
	const base = dna[0];
	let bestMotifs = [];
	let bestScore = Infinity;
	for (let i = 0; i <= dna.length - 1; i += 1) {
		bestMotifs[i] = dna[i].substr(0, k);
	}
	for (let i = 0; i <= base.length - k; i += 1) {
		const motif = base.substr(i, k);
		const newMotifs = [motif];
		for (let j = 1; j <= t - 1; j += 1) {
			const profile = ProfileMatrixWithLaplace(newMotifs);
			const probableValue = ProfileMostProbableKmer(dna[j], k, profile);
			newMotifs.push(probableValue);
		}
		const newMotifsScore = Score(newMotifs);
		if (newMotifsScore < bestScore) {
			bestScore = newMotifsScore;
			bestMotifs = newMotifs;
		}
	}
	return bestMotifs;
}

export default ImprovedGreedyMotifSearch;

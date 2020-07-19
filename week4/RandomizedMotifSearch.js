import ProfileMatrixWithLaplace from '../week3/ProfileMatrixWithLaplace';
import ProfileMostProbableKmer from '../week3/ProfileMostProbableKmer';
import Score from '../week3/Score';
import GenerateRandomMotifs from './GenerateRandomMotifs';

/**
 * @description Find a Profile-most probable k-mer in a string
 * (using a random algorithm)
 *
 * @param {Array} dna - Array of strings that will be processed
 * @param {Number} k - size of the k-mer that will be searched
 * @param {Number} t - number of chains that the dna have
 * @returns The profile most-probable k-mer(s)
 */
function RandomizedMotifSearch(dna, k, t) {
	let bestMotifs = GenerateRandomMotifs(dna, k, t);

	while (true) {
		const profile = ProfileMatrixWithLaplace(bestMotifs);
		const newMotifs = [];
		bestMotifs.forEach((motif, i) => {
			newMotifs[i] = ProfileMostProbableKmer(dna[i], k, profile);
		});
		if (Score(newMotifs) < Score(bestMotifs)) {
			bestMotifs = newMotifs;
		} else {
			return { bestMotifs, score: Score(bestMotifs) };
		}
	}
}

export default RandomizedMotifSearch;

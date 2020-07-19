import Consensus from './Consensus';
import HammingDistance from '../week2/HammingDistance';

/**
 * @description Calculate the score of the motifs based on the Hamming distance
 *
 * @param {Array} motifs - The motifs that will be scored
 * @returns The score of the motifs
 */
function Score(motifs) {
	const consensus = Consensus(motifs);
	let score = 0;
	for (let i = 0; i <= motifs.length - 1; i += 1) {
		score += HammingDistance(consensus, motifs[i]);
	}
	return score;
}

export default Score;

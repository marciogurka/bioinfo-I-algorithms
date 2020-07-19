/**
 * @description Calculate the string consensus based on the motifs
 *
 * @param {Array} motifs - Array of motifs
 * @returns The consensus string based on the motifs
 */
function Consensus(motifs) {
	let consensus = '';
	const chainSize = motifs[0].length;
	for (let i = 0; i <= chainSize - 1; i += 1) {
		const count = {
			A: 0,
			C: 0,
			G: 0,
			T: 0,
		};
		for (let j = 0; j <= motifs.length - 1; j += 1) {
			if (motifs[j][i] === 'A') count.A += 1;
			else if (motifs[j][i] === 'C') count.C += 1;
			else if (motifs[j][i] === 'G') count.G += 1;
			else if (motifs[j][i] === 'T') count.T += 1;
		}
		const maxNucleotide = Object.keys(count).reduce((a, b) => (count[b] > count[a] ? b : a));
		consensus = consensus.concat(maxNucleotide);
	}

	return consensus;
}

export default Consensus;

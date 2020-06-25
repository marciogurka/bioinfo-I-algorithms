/**
 * @description Find a position in a genome where the skew diagram attains a minimum.
 *
 * @param {String} genome - The genome string that will be searched
 * @returns All integer(s) minimizing Skew(Genome) among all values of i (from 0 to |Genome|).
 */
function MinimumSkew(genome) {
	const skew = [];
	const minimumSkewPosition = [];
	const calculateSkewValue = (nucleotide) => {
		if (nucleotide === 'C') {
			return -1;
		}
		if (nucleotide === 'G') {
			return 1;
		}
		return 0;
	};

	for (let i = 0; i <= genome.length - 1; i += 1) {
		skew[i + 1] = calculateSkewValue(genome.charAt(i));
		if (i === 0) {
			skew[i] = 0;
		} else {
			skew[i] = skew[i - 1] + skew[i];
		}
	}
	const min = Math.min(...skew);
	for (let i = 0; i <= genome.length - 1; i += 1) {
		if (skew[i] === min) {
			minimumSkewPosition.push(i);
		}
	}

	return minimumSkewPosition.join(' ');
}

export default MinimumSkew;

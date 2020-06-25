import ComputingFrequencies from './ComputingFrequencies';
import NumberToPattern from './NumberToPattern';
/**
 * @description Find all frequencies of a DNA sequence
 *
 * @param {String} genome - The genome string that will be processed
 * @param {Number} k - Size of the pattern to be searched
 * @returns All frequences from the genome
 */
function FasterFrequentWords(genome, k) {
	const frequentPatterns = new Set();
	const frequencyArray = ComputingFrequencies(genome, k);
	const maxCount = frequencyArray.reduce(function (p, v) {
		return p > v ? p : v;
	}, 0);

	for (let i = 0; i <= 4 ** k - 1; i++) {
		if (frequencyArray[i] === maxCount) {
			const pattern = NumberToPattern(i, k);
			frequentPatterns.add(pattern);
		}
	}

	return {
		frequentPatterns,
		frequentPatternsFormatted: Array.from(frequentPatterns).join(' '),
	};
}

// Example
// const text =
//   "GCACTAAAGCACCAGCGAGACTAGACAGTGCCTTACGCTGTATAGGGATAAAAGTTGTCAAGATGACTTGCGGGAATCGTTAGGCTGACACGCACTAATGCTCGCCTTCCGGGTGTTCTGTGAGTACGGTTGATCACGGTCGCCCTGCGGATGTACTACCATGAAAGTTGATCACGTGCCGCGCGCTCCCTAAGCTTAGAAGTTTGCACAATCTGCATTCTATCCTGCCACGCCTTCAATAATAAGTGGTGTATGCAATTTGGAGTCGATCTGGGAACCAACGATTAACTTGGGAAGTGGCTATATCAAAATACGATGTCTTCAGCGTCGCGGTC";
// const result = FasterFrequentWords(text, 4);
// console.log(result);

export default FasterFrequentWords;

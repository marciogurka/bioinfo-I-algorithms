/**
 * @description Find a Profile-most probable k-mer in a string based on the profile
 *
 * @param {String} text - The string that will be processed
 * @param {Number} k - Size of the k-mer that will be searched
 * @param {Object} profile - The profile matrix
 * @returns The profile-most probable k-mer in the string based on the profile
 */
function ProfileMostProbableKmer(text, k, profile) {
	const kmersProbability = {};
	let maxProbability = -1;
	let maxProbabilityKmer = null;
	for (let i = 0; i <= text.length - k; i += 1) {
		const kmer = text.substr(i, k);
		const probabilities = [];
		for (let j = 0; j <= kmer.length - 1; j += 1) {
			const nucleotide = kmer.charAt(j);
			const p = profile[nucleotide][j];
			probabilities.push(p);
		}
		kmersProbability[kmer] = probabilities.reduce((acc, cur) => acc * cur);
	}

	Object.keys(kmersProbability).forEach((key) => {
		if (kmersProbability[key] > maxProbability) {
			maxProbability = kmersProbability[key];
			maxProbabilityKmer = key;
		}
	});

	return maxProbabilityKmer;
}

export default ProfileMostProbableKmer;

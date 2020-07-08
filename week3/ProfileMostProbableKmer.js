function ProfileMostProbableKmer(text, k, profile) {
	const kmersProbability = {};
	let maxProbability = 0;
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

	return { maxProbability, maxProbabilityKmer };
}

export default ProfileMostProbableKmer;

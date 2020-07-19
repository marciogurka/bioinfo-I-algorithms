/**
 * @description Calculate the profile matrix in a DNA chain
 * (using Laplace Rule of Succession for optimization)
 *
 * @param {Array} dna Array of DNA chains
 * @returns The profile matrix based on the DNA chains
 */
function ProfileMatrixWithLaplace(dna) {
	const profile = {};
	const A = [];
	const C = [];
	const G = [];
	const T = [];
	const chainLength = dna[0].length;
	const numRows = dna.length;
	const denominator = numRows * 2;
	for (let i = 0; i <= chainLength; i += 1) {
		let countA = 0;
		let countC = 0;
		let countG = 0;
		let countT = 0;
		dna.forEach((chain) => {
			if (chain[i] === 'A') countA += 1;
			else if (chain[i] === 'C') countC += 1;
			else if (chain[i] === 'G') countG += 1;
			else if (chain[i] === 'T') countT += 1;
		});
		A.push((countA + 1) / denominator);
		C.push((countC + 1) / denominator);
		G.push((countG + 1) / denominator);
		T.push((countT + 1) / denominator);
	}
	profile.A = A;
	profile.C = C;
	profile.G = G;
	profile.T = T;

	return profile;
}

export default ProfileMatrixWithLaplace;

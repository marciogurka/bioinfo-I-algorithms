/**
 * @description Calculate the profile matrix in a DNA chain
 *
 * @param {Array} dna Array of DNA chains
 * @returns The profile matrix based on the DNA chains
 */
function ProfileMatrix(dna) {
	const profile = {};
	const A = [];
	const C = [];
	const G = [];
	const T = [];
	const chainLength = dna[0].length;
	const numRows = dna.length;
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
		A.push(countA / numRows);
		C.push(countC / numRows);
		G.push(countG / numRows);
		T.push(countT / numRows);
	}
	profile.A = A;
	profile.C = C;
	profile.G = G;
	profile.T = T;

	return profile;
}

export default ProfileMatrix;

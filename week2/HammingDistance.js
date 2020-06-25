/**
 * @description Compute the hamming distance between two strings.
 *
 * @param {String} stringA - First string to be compared
 * @param {String} stringB - Second string to be compared
 * @returns The Hamming distance between these strings
 */
function HammingDistance(stringA, stringB) {
	let hammingDistance = 0;
	for (let i = 0; i <= stringA.length; i += 1) {
		if (stringA.charAt(i) !== stringB.charAt(i)) hammingDistance += 1;
	}
	return hammingDistance;
}

export default HammingDistance;

/**
 * @description Generates all the possible imediate neightbors of a pattern
 *
 * @param {String} pattern The pattern that will be processed
 * @returns A set with all the possible imediate neighbors of the pattern
 */
function ImmediateNeighbors(pattern) {
	const neighborhood = new Set();
	neighborhood.add(pattern);
	for (let i = 0; i <= pattern.length; i += 1) {
		const symbol = pattern.charAt(i);
		['A', 'C', 'G', 'T']
			.filter((nt) => nt !== symbol)
			.forEach((nt) => {
				const neighbor = pattern.substr(0, i) + nt + pattern.substr(i + 1);
				neighborhood.add(neighbor);
			});
	}
	return neighborhood;
}

export default ImmediateNeighbors;

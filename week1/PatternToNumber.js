import SymbolToNumber from './SymbolToNumber';

/**
 * @description Convert the pattern to a respective number.
 *
 * @param {String} pattern - The pattern that will be converted
 * @returns The number that represents the pattern.
 */
function PatternToNumber(pattern) {
	if (!pattern || pattern.length === 0) return 0;
	const symbol = pattern.substr(-1);
	const prefix = pattern.substring(0, pattern.length - 1);
	return 4 * PatternToNumber(prefix) + SymbolToNumber(symbol);
}

// console.log(PatternToNumber("AA"));

export default PatternToNumber;

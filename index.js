import { FrequentWordsWithMismatchesBySorting, FrequentWordsWithMismatches } from './week2';

const text = 'ACGTTGCATGTCGCATGATGCATGAGAGCT';

const result = FrequentWordsWithMismatchesBySorting(text, 4, 1);
const result2 = FrequentWordsWithMismatches(text, 4, 1);

console.log(result);
console.log(result2);

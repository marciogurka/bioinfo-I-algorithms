/**
 * @description Find all occurrences of a pattern in a string.
 * 
 * @param {String} pattern - The pattern that will be searched
 * @param {String} genome - The DNA chain string
 * @returns All starting positions in Genome where PAttern appears as a substring.
 */
function PatternMatching(pattern, genome) {
  let result = "";
  for (let i = 0; i <= genome.length - pattern.length; i++) {
    if (genome.substring(i, i + pattern.length) === pattern) {
      result = result.concat(`${i} `);
    }
  }
  // Remove last space
  result = result.substring(0, result.length - 1);
  return result;
}

// Example
// const text =
//   "CATGTGAAATGTGAACTTATGTGAACTAATGTGAATATGTGAAACCCATGTGAAAGGTTCAATGTGAATTATGTGAATTAATGTGAAGATAGATGTGAAATGTGAATATGTGAAATGTGAAATTGCATGTGAAGGATGTGAATATGTGAAATGTGAAATGTGAAGACATGTGAAATGTGAATCATGTGAATGCCACAGGATGTGAAGTATGTGAAATAGGGATAGCGCCAATGTGAAGCATGTGAAATGTGAAATGTGAAGATGTGAACAATGTGAAATGTGAAGCAACATGTGAAAACATGTGAATCTATGTGAAATGTGAATGAGGATGTGAAATATGTGAAGGACCGATGTGAAAAATAACATGTGAAATGTGAACATGTGAAGGATGTGAAACATGTGAAATGTGAACCATCACATGTGAAATGTGAAATGTGAAATGTGAAGGTTATGTGAATTATGCTATGTGAAATGTGAAAGATGTGAAATATGTGAAAATGTGAATCTATGTGAATGATGTGAAGCCAGGCTATGTGAAATTGATATGTGAAATGTGAATTACGTGATGTGAACATCATGTGAAAACATGTGAACATGTGAATATTTATGTGAAACATGTGAAATGTGAAATGTGAAATGTGAAATGTGAAGAGACGATGTGAAATGTGAAGAATGTGAACATGTGAATATGTGAAGGATGTGAAAACTAAGCGGATAACAATGTGAAAATGTGAAGGCCATGTGAAAATTATGTGAACTCGGATGTGAACATGTGAAATGTGAACCTCTATATGTGAACATGTGAACGAAGAACATGTGAAATGTGAAATGTGAACTATGTGAACTTGAGATGTGAAGATGTGAACGAATGTGAATGAAAGTATGTGAACTATGTGAACATGTGAATCATGTGAACAATGTGAACTCAGATGTGAAGTATGTGAAGCATGTGAAGGATGTGAACATGTGAATCTGTCATACCAATGTGAAATGTGAACATGTGAACGATGTGAACTACTATGTGAAAGAATGTGAAATGTGAAAGCTCATGTGAACATGTGAAAAATGTGAACATGTGAAGCATGTGAATTATGTGAATCTCATGTGAATTATGTGAACTGATCAGATGTGAACGCTAATGTGAAATGTGAAATGTGAAATGTGAAATGTGAAATGTGAAGATGTGAAATGTGAAAGATGTGAAATGTGAATGGAAGGCATGTGAACGAGCATGTGAAGAGCTAAAAATTCGATGTGAACATGTGAAATGTGAAATCGCGGTTCATGTGAAGGTATGTGAATCATGTGAAACTTATGTGAAATGTGAAGATGTGAAATGTGAAATGTGAAAGCATGTGAATGAAGAATGTGAACCTCATGTGAACAATGTGAACATGTGAACATATGTGAAGGATGTGAACATGTGAACCATAATGTGAAGCCTATGCAATGTGAACGGATGTGAAATGTGAAAATACTATCATGTGAAGCTTAGGATGTGAAGGATGTGAAACATGTGAAGACATCATGTGAAATGTGAAATCGATGTGAACTTCATGTGAACATGTGAAATGTGAAATATGTGAACATGTGAAAGTTCATGTGAAATGTGAAATGTGAATTGATGTGAAGGCACTTATGTGAACATATGTGAAATGTGAATATGTGAAGATGTGAAATGTGAATCAAAGCTATGTGAAATGTGAAAATGTGAAGCATGTGAACTAGCATGTGAAAGGAGTACATGTGAAACCGAGCGATGTGAAAAGGCGGATGTGAAATGTGAAAGCATGTGAAATGTGAAACTATGTGAAGTCATGTGAAATGTGAAATGTGAAGGGATGTGAAATGTGAAGATGTGAAGTATGTGAATTCTATATTATGTGAAGGATTACAATGTGAACAATGTGAAACGTGCCATGTGAATGATGTGAAACATGTGAAAGCGCTGGATGTGAAATGTGAAATGTGAATATGTGAAGATGTGAAATGTGAAATGTGAAATGTGAATATGTGAAAATGTGAACTCTATGTGAAGGAATGTGAAATGTGAAGAATCATGTGAAATGTGAATATAATGTGAAGGCATGTGAACCGTTGTATGGATGTGAAAATGTGAAATGTGAACATGTGAATGGATGTGAAATGTGAATATGTGAAAGATCGTTTCATGTGAATAGGGGATGTGAAAATGTGAATGAATGTGAAGGTAGACATTGCCATGTGAAGAATGAGCATGTGAAAGATGTGAATTATATGTGAAATGTGAAGTGTAGTATATGTGAAGATGTGAAATGTGAAGGAATGTGAAGAATGTGAAATGTGAAATGTGAAGATGTGAATATGTGAAGCATGTGAACGATGTGAAGTGTATGTGAATTATGTGAAAATGTGAAAGTATGTGAAGTTAGACATGTGAACGTATGTGAAATGTGAATGGTATTATGTGAAATGTGAAATGTGAATTCAGCAGTATGTGAAGAGATGTGAACATGTGAACTGGATCGGGCATGTGAATAAATTATGTGAATTAAGGATGTGAAATGTGAACTTATGTGAATTTCATGTGAAGTTGAGCTCATGTGAAATGTGAAAATGTGAAAGATGTGAAGATGTGAAAATGTGAAATGTGAAATGTGAATATGTGAAGTATGTGAAAAAATGTGAACCATGTGAAGTAATGTGAAGTGCCGATGTGAATATGTGAAGATGTGAACCCGGGACATGTGAAATGTGAAACAAATGTGAACACCTATGTGAAATGTGAAGCAATGTGAAGTTTAATGTGAAATGTGAAAATTGCTACATGTGAAGGGTAAAATGTGAAATGTGAACGGTACCACATGTGAAATGTGAACATGTGAACCATGTGAATTTCATGTGAAATGTGAAGATATGTGAACGTATTTGATGTGAATCTATGTGAAATATGTGAACATGTGAATTCACGTCCCGAAACCAGGAATGTGAATGATGTGAATGGATGTGAATGAGGTATGTGAAATGTGAACACCGTAATGTGAAATGTGAAATGTGAACATGTGAACATGTGAAATGTGAAATAATGTGAAATGTGAAACATGTGAAATGTGAAGGATGTGAAGATGTGAAATGTGAACACAGCGTTGAAGATGTGAAATGTGAAATGTGAACATGTGAAAAAATGTGAATCCTATGTGAAAGCTCACGATGTGAAACCGATAACGAAGCATGTGAAATGTGAAACTTTATGTGAAATCAATGTGAAATGTGAATGATGTGAAAAGATGTGAAATGTGAAAACTATGTGAAATGTGAAATGTGAATAACGATGTATGTGAATAATGTGAATGAATGTGAACATATCATGTGAAATGTGAAGAATGTGAATTCCATGTGAAGATGTGAAATGTGAAATATGTGAAATGTGAAGCATGTGAACATGTGAAAATGTGAACTATGTGAAAAATGTGAAGGGATGTGAAATGTGAAGGGAGTAGTTAATGTGAAATGTGAACCCACATGTGAACCCGGTGATGTGAAAAAGATGTGAACGCAATGTGAATACATGTGAAGCATGTGAAGCTAGATGATGTGAAGAGATGTGAACATGTGAATAGATGTGAATTAATGTGAAAAGAGCATGCATGTGAACGGCCTATGTGAAGTATGTGAATTGATCGATGTGAAATGTGAATACTCTCCACGTCGCTATGTGAAATGTGAAAATTGCACGATGTGAATACAGATGTGAAGTATGTGAAGATGTGAATTATGTGAAACATGTGAAAATGTGAAGATGTGAATTGATGTGAAATCATGTGAACATGTGAAATGTGAAATGTGAAATGTGAATCAGATGTGAAGCATGTGAAATGTGAAGGGAAATATGTGAAGAACTTGATGTGAAGGATGTGAAAGTGGAGATGTGAATTGGCTTAGATGTGAATATGTGAAGCATGTGAAACTAAAAAATGTGAAATGTGAAATGTGAAAGATGTGAAGAGCATGTGAAATGTGAAATGTGAAATGTGAAATGTGAAATGTGAATTATGTGAAGAATGTGAAATGTGAAATGTGAAATGTGAACTATGTGAAATGTGAAGGGATGTGAACTAATGTGAAGATGTGAATAAATATGTGAAGATAATGTGAAATTATGTGAACATGTGAAATGTGAAAGATGTGAAATGTGAAAAGCGAGGTATGTGAAGCTATGTGAAGAAATGTGAACATGTGAATGTTAGCCATGTGAAGATGTGAAATGTGAAAATGTGAACATGTGAACATGTGAAGATGTGAAATGTGAATAAGGGAGACAATGTGAAATGTGAAGATGTGAAATGTGAACGCAAATTTAATGTGAACATGTGAACCAGTTCTCATGTGAATGCATGTGAATTCTATGTGAACGATGTGAAATGTGAAATGTGAAGATGTGAAATGTGAATCCGGGCCGCGTATCTATGTGAACTATTATGTGAAGCATGTGAACTCGAATGTGAATCGATGTGAAAGTCAAATGTGAAGCGTGACTTAAGGATGTGAAGAGATGTGAAGCATTTGCAATGTGAAGTAATGTGAAGCATGTGAAATGTGAACATGTGAATCTATGTGAAATGTGAATTTATGTGAATTAACTATGTGAACGAGTGATGTGAAGCACCATGTGAACATCATGTGAAACAGCGATGTGAACTCAATTAGAGAATGTGAACGATGTGAAATGTGAAATGTGAAGGGAAATGTGAATCACCTCTGTGATGTGAAAATGTGAAATGTGAAGATGTGAACCTAATATGTGAAATGTGAAATGTGAACATGTGAAATGTGAAATGTGAAACGCCCATGTGAACATGTGAATCAGTGTAAGACTATGTGAATGAGATGTGAACATGTGAATTAGATGTGAAGTGACATGTGAAAATGTGAAATGTGAAATGTGAATGATGTGAAGATGTGAATAGCCGCATGTGAACATGTGAACGGACATGTGAAGGATGTGAAGTCATGTGAAAGACGGATGTGAAATGTGAAATGTGAAGATGTGAATTCTCATGTGAACTATGTGAACGGGCTAATCATTATGTGAATTGCGGGATACCGGATGTGAACAATGTGAAAATGTGAAATGTGAACTTTATATGTGAAATCATGTGAATCCTGATGAAAGATGTGAAATGTGAATACTTATGTGAAAATGTGAACTATGTGAAGATGTGAAACTATCGTTTCCTATGTGAAAAGCGTATGTGAACATGTGAAAATGTGAATGATGTGAACCATGTGAAAATGTGAACATGTGAAATGTGAATCAGAGAGCCCCCTAAATAGGCGTGCATGTGAAGATGTGAAACGATGTGAAAATATGTGAAAGCGTATGTGAAAAATGTGAAATGTGAAATGTGAATGATGTGAAACTATGTGAAATGTGAATAATGTGAAGAGATGTGAAGATGTGAAGATGTGAAGGTATGTGAACATGTGAATATGTGAAAGTATATGTGAATATGTGAAATGTGAATTGATGTGAAGGATGTGAATACTCGAATGTGAAATGTGAACTGCATGTGAATAATGTGAACGATGTGAACCCAATGTGAACCCTCGCATGTGAATACGAATGTGAACATGTGAAAATGTGAAGTAGCTCGGGATCATGTGAAATGTGAATATGTGAAATGTGAACATGTGAATTAAGGGATGTGAACAGCCCCCATGTGAACTATGTGAAGCAACATCATGTGAAATGTGAACATGTGAAATGTGAAAGATGTGAAGCATGTGAAGATGTGAAATGTGAATAGCATGTGAAATGTGAAATGTGAAAATGTGAAATGTGAAAATGTGAAGATGTGAACGGATGTGAAAAGATAGGGGTCATAAATGTGAATAGATGTGAAGATGTGAAATTATGTGAAATGTGAATGGGGATGACGATGTGAAAGAGGAAGTATGTGAACAGGTACATGTGAATATGTGAAGAAATGTGAAAGGATGTGAAATGTGAACATGTGAAGATGTGAAGGCCGAAAACAATGTGAAGACATGTGAATTATGTGAATTCGGTCGATGTGAAGAGGATGTGAAATGTGAATGATGTGAAATGTGAATTATGTGAACGTAAATGTGAATTTATGTGAAATGTGAATTGAATGTGAAGCATGTGAAGTAATGTGAATTTCCGAATATATGTGAAATGTGAAATAAATGTGAATATGTGAAATGTGAAACATGTGAAGATGTGAATCATGTGAAATGTGAAGATGTGAACATGTGAACGATGTGAATATGTGAAATGTGAACAGATGTGAAACATGTGAAATGTGAAGATGTGAATTATGTGAAGATGTGAAAATGTGAACACATGTGAAGAGTGGTCATAAACATGTGAAATGTGAAGAGGCGTAATGTGAAAATGTGAACTATGTGAAGTAAATGTGAAGATTGCAAGATGTGAATGAATGTGAATTATGTGAAGGATGTGAAACATTAATGTGAACAATGTGAATATGTGAAATGTGAAATGTGAATTGCATTATGTGAAAAGTTATGTGAAGATGTGAAACGATGTGAAATGTGAAATGTGAAATGTGAACCGCGAAATAGTTGATGTGAACGATGTGAAATGTGAAATGTGAATATGTGAAATGTGAACCATGTGAAATAATGTGAATAATGTGAATGTATGTGAATTAGAATGTGAAATGTGAAGTAGCTTCGGAATGTGAAAAGATGTGAAGTATGTGAACATGTGAAAATGTGAAGATATATGTGAAGGAAATGTGAAGGGATGTGAAATGTGAAGCCATGTGAAATATGTGAAATGTGAAATGTGAAGTCTGGATGTGAAATGTGAATATGTGAACCGTAATGTGAAATGTGAAAGGTGCCGTCTAGGATATTCTATGTGAACGATGTGAAACAATCTACATGTGAAATGTGAAAGGGATGTGAACTTGAATGTGAATGGATGTGAAAACGACATGTGAATATAACACCGCTCTGGCCCATGTGAACAATGTGAATATGTGAACAATGTGAAAACGATGTGAACAGGATGTGAAAATGTGAAAAATGTGAACCATGTGAAATGGATGTGAAAAATGTGAAAATGTGAAATGTGAAAGATGTGAAGATGTGAACCTGATGTGAATTACTTATGTGAAGGATGTGAATTTGATGTGAAGAAATGTGAAGTGGATGTGAAATGTGAACTACCACATGTGAAATGTGAAATGTGAACTAATGTGAACCGATGTGAACCATATGTGAAATTCCATGTGAAATGTGAAGCAATGTGAAATGTGAAGATGTGAACACATGTGAAATGTGAACCATGTGAAATGTGAAATGTGAAGATGTGAAATGTGAAGTAATGTGAAATGTGAAAAATCATGTGAAGAACTATATGTGAAAACATGTGAATAATGTGAACGGATGTGAATGGGATGTGAAGATGTGAAGGGCATGTGAATATGTGAAATGTGAATTCCCCGTGCGCCACGATGTGAAGCAATGTGAATGATATGTGAATTAATGTGAACAGAAGGATGTGAATCATTTCTCGTAATGTGAACGAGGATGTGAAAATGTGAAACGAGACATGTGAAATGTGAAGCACAATGTGAAGATGTGAAGCCTCCTAATGTGAAATCTGAAGATATGTGAACAATGTGAAAAGTTCGTATGTGAAATGTGAAATGTGAAATTGATGTGAAAAAAGTGGATGTGAAGCCGAATGTGAATATGTGAAGATGTGAAGGGATGTGAAAATGTGAAGTGCATCATGTGAAAATGTGAAATGTGAAATGTGAAGTGATGTGAATATGTGAACATGTGAACATGTGAAATGTGAAGGGCTATGTGAAAGATGTGAACATGTGAAAATTGGATGTGAATATGTGAAATGTGAAACACCCGGTTATGTGAAATGTGAAGTATGTGAAATGTGAAGATGTGAACTCTGCATGTGAATGGCCCATGTGAATCCATGTGAATCCATGTGAACAATGATCGCCAGCAGCCTATGTGAAATGTGAACCTGATGTGAAATGTGAAGCGATGTGAATGGTAATGTGAACATGTGAATCAACTATGTGAATATGTGAAATGTGAAGTGATGTGAATCCCGCGTGATGTGAAAATGTGAACTTATGTGAAACCATGTGAAAAATGTGAACGTATGTGAACATGTGAAAATGTGAAATCGACCGATGTGAAATGTGAAATGTGAATACGTATGTGAAATGTGAACCATGTGAACGATGTGAACTGCATGTGAAGATGATGTGAAATATGTGAATATCAATGTGAAAATGTGAAATGCATGTGAAATGTGAACTAGATGTGAACAATGTGAAACATTGAATGTGAAGATGTGAATTATGTGAAGATGTGAATCCATGTGAACCCAAGGATGTGAAAGATGTGAAGTAGCGCAATGTGAAAGATGTGAAAATGATGTGAACATGTGAAATGTGAAGGGCATGTGAACGATACGGGGATTTCGCCGCCGATGTGAAATGTGAAATGTGAATAGATGTGAAGAATGTGAACATGTGAAGATGTGAAATATTATGTGAAAATGTGAAAGATGTGAAGGATATGTGAAAGGCCATGCAATGTGAATCTATAGTTTATGTGAAATGTGAAACATGATGTGAAAGACAATGTGAAATTATGTGAATATGTGAACGCACGAATGTGAAGGTGTACGACCATGTGAAAGATGTGAAATGTGAACAGCCTATTGCATGTGAATTTTATCTCCCACATGTGAAGACATGTGAACAGCGAGCGATGTGAACCATGTGAAGTCGACTATGTGAATGCCGTATGTGAACTCTATGTGAATATGTGAAATGTGAATTGTACCTAACGGCATGTGAAATGTGAAG";
// const pattern = "ATGTGAAAT";
// console.log(PatternMatching(pattern, text));

export default PatternMatching;

/**
 * @description Find all approximate occurrences of a pattern in a string.
 *
 * @param {String} genome - The DNA string that will be searched
 * @returns All indexes that have the minimum skew value
 */
function MinimumSkew(genome) {
  const skew = [];
  const minimumSkewPosition = [];
  const calculateSkewValue = (nucleotide) => {
    if (nucleotide === 'C') {
      return -1;
    } else if (nucleotide === 'G') {
      return 1;
    } else {
      return 0;
    }
  };

  for (let i = 0; i <= genome.length - 1; i++) {
    skew[i + 1] = calculateSkewValue(genome.charAt(i));
    if (i === 0) {
      skew[i] = 0;
    } else {
      skew[i] = skew[i - 1] + skew[i];
    }
  }
  const min = Math.min(...skew);
  for (let i = 0; i <= genome.length - 1; i++) {
    if(skew[i] === min) {
      minimumSkewPosition.push(i);
    }
  }

  return minimumSkewPosition.join(" ");
}

export default MinimumSkew;
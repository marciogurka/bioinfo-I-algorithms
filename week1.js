function patternCount(string, pattern) {
  let count = 0;
  for (let i = 0; i <= string.length - pattern.length; i++) {
    if (string.substring(i, i + pattern.length) === pattern) {
      count++;
    }
  }
  return count;
}

// Example
const pCount = patternCount("ATGACTTCGCTGTTACGCGC", "CGC");
console.log(pCount);

function frequentWords(text, k) {
  const patterns = new Set();
  const frequentPatterns = {};
  const textSize = text.length;
  for (let i = 0; i <= textSize - k; i++) {
    const pattern = text.substring(i, i + k);
    patterns.add(pattern);
  }
  patterns.forEach((item) => {
    // Need to check the overlapping string
    let str = text,
      reg = new RegExp(item, "g"),
      next = reg.exec(str),
      res = [];
    while (next) {
      res.push(next[0]);
      reg.lastIndex = next.index + 1;
      next = reg.exec(str);
    }
    frequentPatterns[item] = res.length;
  });

  return frequentPatterns;
}

// Example
const patterns = frequentWords("ATGACTTCGCTGTTACGCGC", 3);
console.log(patterns);

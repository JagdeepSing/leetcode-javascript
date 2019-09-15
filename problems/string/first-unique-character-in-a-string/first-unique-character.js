function firstUniqChar(s) {
  // O(n^2) time and O(1) space -------------
  // select character
  // traverse rest of string to see if character exists
  // if it doesn't, return it
  // return -1
  // ----------------------------------------

  // O(n) time and space --------------------
  // add all characters into hashmap with 'character':count
  // traverse string and if count is 1 return it
  // return -1
  // ----------------------------------------

  const charCounts = new Map();

  for (let i = 0; i < s.length; i++) {
    charCounts.set(s[i], (charCounts.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (charCounts.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}

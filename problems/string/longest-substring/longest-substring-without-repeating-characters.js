/**
 *  Length of longest substring with all unique characters
 *
 * @export
 * @param {String} s
 * @returns {Number}
 */
export default function longestSubstring(s) {
  if (!s || !s.length) {
    return 0;
  }
  
  let max = 0;
  const map = new Map();

  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]), i);
    }
    max = Math.max(max, j - i + 1);
    map.set(s[j], j + 1);
  }

  return max;
}

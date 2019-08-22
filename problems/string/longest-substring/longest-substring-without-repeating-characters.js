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
  const map = new Map();
  let left = 0;
  let max = 1;
  map.set(s[0], 0);

  for (let i = 1; i < s.length; i++) {
    if (map.has(s[i])) {
      let idxOfRepeatChar = map.get(s[i]);

      for (let j = left; j <= idxOfRepeatChar; j++) {
        map.delete(s[j]);
      }

      map.set(s[i], i);
      left = idxOfRepeatChar + 1;
    } else {
      map.set(s[i], i);
      max = Math.max(max, map.size);
    }
  }
  return max;
}
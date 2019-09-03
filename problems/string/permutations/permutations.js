/**
 *  Returns all possible permutations for a collection of distinct integers.
 * 
 *  Leetcode Problem Num: 46
 *  Leetcode Difficulty: Medium
 *
 * @author Jagdeep Singh
 * @date 2019-09-02
 * @export
 * @param {Array} nums
 * @returns {Array}
 */
export default function permute(nums) {
  if (!nums || nums.length <= 1) {
    return [nums];
  }
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== i) {
      continue;
    }
    let subPer = permute(nums.slice(0, i).concat(nums.slice(i+1)));
    subPer.forEach(per => result.push([nums[i]].concat(per)));
  }
  return result;
}

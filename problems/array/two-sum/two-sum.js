/**
 *  Returns array of indices of two numbers such that they add up to a specific target.
 *
 * @export
 * @param {Array} nums
 * @param {Number} target
 * @returns {Array}
 */
export default function twoSum(nums, target) {
  const vals = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (vals.has(target - nums[i])) {
      return [vals.get(target - nums[i]), i];
    }
    vals.set(nums[i], i);
  }
  return [];
}

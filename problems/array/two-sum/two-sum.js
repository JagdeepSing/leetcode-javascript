/**
 *  Returns array of indices of two numbers such that they add up to a specific target.
 *
 * @export
 * @param {Array} nums
 * @param {Number} target
 * @returns {Array}
 */
export default function twoSum(nums, target) {
  const vals = {};

  for (let i = 0; i < nums.length; i++) {
    if (vals.hasOwnProperty(target - nums[i])) {
      return [vals[target - nums[i]], i];
    }
    vals[nums[i]] = i;
  }
  return [];
}

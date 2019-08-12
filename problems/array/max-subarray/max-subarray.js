/**
 *  Largest contiguous sum possible from an array
 *
 * @export
 * @param {Array} nums
 * @returns {Number}
 */
export default function maxSubarray(nums) {
  let prev = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }
  return max;
}

/**
 *  Maximum Product possible from contiguous subarray within input array
 *
 * @export
 * @param {Array} nums
 * @returns {Number}
 */
export default function maxProductSubarray(nums) {
  let max = nums[0];
  let pMax = nums[0];
  let pMin = nums[0]; 

  for (let i = 1; i < nums.length; i++) {
    let temp = pMax;
    pMax = Math.max(pMax * nums[i], pMin * nums[i], nums[i]);
    pMin = Math.min(temp * nums[i], pMin * nums[i], nums[i]);
    max = Math.max(max, pMax);
    console.log(i, max, pMax, pMin);
  }

  return max;
} 
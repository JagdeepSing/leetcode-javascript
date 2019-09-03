
/**
 *  Given an array nums of n integers, are there elements 
 *  a, b, c in nums such that a + b + c = 0? Find all 
 *  unique triplets in the array which gives the sum of zero.
 *
 *
 * @author Jagdeep Singh
 * @date 2019-09-02
 * @export
 * @param {Array} nums
 * @returns {Array}
 */
export default function threeSum(nums) {
  if (nums.length < 3) return [];

  const results = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        results.push([nums[i], nums[j], nums[k]]);

        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        j++;
        k--;
      } else if (sum < 0) j++;
      else k--;
    }
  }

  return results;
}

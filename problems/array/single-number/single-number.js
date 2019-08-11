/**
 * get unique value in array
 *
 * @export
 * @param {Array} nums
 * @returns {number} 
 */
export default function singleNumber(nums) {
  const uniqueNums = new Set();

  for (let i = 0; i < nums.length; i++) {
    uniqueNums.has(nums[i]) ? uniqueNums.delete(nums[i]) : uniqueNums.add(nums[i]);
  }
  return uniqueNums.values().next().value;
}

/**
 * Determines if an array has duplicate values or not.
 *
 * @export
 * @param {Array} nums
 * @returns {Boolean} 
 */
export default function containsDuplicate(nums) {
  const uniqueValues = new Set();

  for (let i = 0; i < nums.length; i++) {
    uniqueValues.add(nums[i]);
  }

  return nums.length !== uniqueValues.size;
}
/**
 *  Minimum value in sorted, rotated array
 *
 * @export
 * @param {Array} nums
 * @returns {Number}
 */
export default function findMin(nums) {
  // sorted array
  if (nums[0] < nums[nums.length - 1]) {
    return nums[0];
  }

  let left = 0;
  let right = nums.length - 1;

  while (nums[left] > nums[right]) {
    let mid = Math.floor((left + right) / 2);
    nums[mid] < nums[right] ? (right = mid) : (left = mid + 1);
  }
  return nums[left];
}

/**
 *  Array where the ith value is equal to the product of all the 
 *  values in the input array except the ith value in the input array.
 *
 * @export
 * @param {Array} nums
 * @returns {Array}
 */
export default function productExceptSelf(nums) {
  // product of all values to left
  // product of all values to right
  // current value = left product * right product

  const left = new Array(nums.length);
  left[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i-1] * nums[i-1];
  }

  let right = 1;
  for (let i = left.length - 1; i >= 0; i--) {
    left[i] = left[i] * right;
    right *= nums[i];
  }
  return left;
}
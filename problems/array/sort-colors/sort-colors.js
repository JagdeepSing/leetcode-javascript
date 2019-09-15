function sortColors(nums) {
  let current = 0;
  let p0 = 0;
  let p1 = nums.length - 1;

  while (current <= p1) {
    if (nums[current] === 0) {
      let temp = nums[p0];
      nums[p0] = nums[current];
      nums[current] = temp;

      p0++;
      current++;
    } else if (nums[current] === 2) {
      let temp = nums[p1];
      nums[p1] = nums[current];
      nums[current] = temp;

      p1--;
    } else {
      current++;
    }
  }
  return nums;
}

var maxSlidingWindow = function(nums, k) {
  if (nums.length < k) {
      return nums;
  }
  
  let max = { 
      'num': nums[0],
      'idx': 0
  };
  let maxNums = [];
  for (let i = 0; i < nums.length; i++) {
      if (max.idx < (i + 1 - k)) {
          // max is out of sliding window
          max.num = nums[i+1-k];
          max.idx = i + 1 - k;
      }
      
      if (nums[i] >= max.num) {
          // new max
          max.num = nums[i];
          max.idx = i;
      }
      if (i+1 >= k) {
          console.log(max);
          maxNums.push(max.num);
      }
  }
  return maxNums;
};

console.log(maxSlidingWindow([9,11], 2));
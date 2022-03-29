/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = nums.length - 1; i >= 2; i--) {
        let start = i - 2;
        let end = i - 1;
        while (start < end) {
          if (nums[end] + nums[start] > nums[i]) {
             return nums[end] + nums[start] + nums[i];
          }
          else {
             start++;
         };
    };
  };
    return 0;
};
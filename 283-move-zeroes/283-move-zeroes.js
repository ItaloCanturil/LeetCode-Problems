/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let index = nums.indexOf(0);
  let arr = []

  while ( index >= 0) {
    arr.push(nums[index])
    nums.splice(index, 1)

    index = nums.indexOf(0)
  }
  arr.forEach(item => nums.push(item))
  return nums
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
  if (nums.includes(0)) return 0
  const product = nums.reduce((acc, curr) => {
    if(acc == Infinity) return acc = curr
    return acc * curr
  })
  return signFunc(product)
};

function signFunc(product) {
  if(product > 0) {
      return 1
  } else if (product < 0) {
      return -1
  } else if (product == 0) return 0
}
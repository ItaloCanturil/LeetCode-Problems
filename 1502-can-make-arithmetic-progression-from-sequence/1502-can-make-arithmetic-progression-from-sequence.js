/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b)
  const razao = arr[1] - arr[0];
  let result = true

  arr.reduce((acc, curr) => {
    if (curr - acc != razao) result = false
    return curr
  })

  return result
};
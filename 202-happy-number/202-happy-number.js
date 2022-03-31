/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let memorySet = new Set();

  while (true) {
    n = sumOfSquare(n)

    if (n === 1) return true
    if (memorySet.has(n)) return false

    memorySet.add(n)
  }
};

const sumOfSquare = num => {
  let sum = 0;
  while (num) {
    sum += (num % 10) ** 2
    num = Math.floor(num/10)
  }
  return sum
}
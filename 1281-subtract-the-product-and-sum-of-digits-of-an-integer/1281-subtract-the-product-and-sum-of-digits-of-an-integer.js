/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const product = n.toString().split("").reduce((prev, curr) => prev * curr);
    const sum = n.toString().split("").reduce((prev, curr) => Number(prev) + Number(curr), 0);
    return product - sum
};
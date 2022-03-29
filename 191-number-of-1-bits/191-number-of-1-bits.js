/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    const num = n.toString(2);
    let howMany = 0;
    Array.from(num).forEach((i) => {
        if (i == '1') {
            howMany++
        }
    })
    return howMany;
};
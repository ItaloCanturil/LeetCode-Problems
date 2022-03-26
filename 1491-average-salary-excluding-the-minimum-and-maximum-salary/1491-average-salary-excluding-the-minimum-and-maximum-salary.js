/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let sum = 0;
    let arrSort = salary.sort((a, b) => a - b);
    let arrFirst = arrSort.shift();
    let arrLast = arrSort.pop();
    const arrLength = arrSort.length;
    const average = arrSort.reduce((previousValue, currentValue) => previousValue + currentValue, sum)
    return average/arrLength
};
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
  if (s1 === s2) return true;
  const array = [];
  for(let i = 0; i < s1.length; i++) {
    if(s1[i] !== s2[i]) {
      array.push(s1[i]);
    }
    if (array.length > 2) return false;
  }

  return s2.includes(array[0]) && s2.includes(array[1]);
};
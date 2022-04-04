/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let finalString = ''
  const stringHigh = word1.length > word2.length ? word1 : word2
  word1 = word1.split('')
  word2 = word2.split('')

  for(let i = 0; i < stringHigh.length; i++){
    if(word1[i]){
      finalString += word1[i]
    }
    if(word2[i]) finalString += word2[i]
    
  }

  return finalString
};
/*
Reverse every other word in a given string, then return the string. 
Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. 
Punctuation marks should be treated as if they are a part of the word in this kata. 
*/

function reverse(str){
    let newStringArr = str.split(' ')

    for ( let i=0; i<newStringArr.length; i++) {
      newStringArr[i] = newStringArr[i].split('')
      newStringArr[i].reverse()
      newStringArr[i] = newStringArr[i].join('')
    }
    newStringArr = newStringArr.join(' ')
    

    return newStringArr
    
  }
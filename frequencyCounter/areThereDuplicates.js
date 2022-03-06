// 실행 ctrl + alt + n
function areThereDuplicates(...args) {
  let frequencyOfArguments = {};

  for(let val of args) {
    frequencyOfArguments[val] = (frequencyOfArguments[val] || 0) +1;
  }

  for(let key in frequencyOfArguments) {
    if(frequencyOfArguments[key] >= 2 ) return true;
  }
  return false;
}

// inputs and outputs examples
// areThereDuplicates(1,2,3) // false
// areThereDuplicates(1,2,2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
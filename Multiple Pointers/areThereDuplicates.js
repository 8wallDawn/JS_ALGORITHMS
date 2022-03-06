// 실행 ctrl + alt + n
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

// inputs and outputs examples
// areThereDuplicates(1,2,3) // false
// areThereDuplicates(1,2,2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
function isSubsequence (str1, str2) {
  let p1 = 0;
  let p2 = 0;

  while(p2 < str2.length) {
    if(str1[p1] !== str2[p2]) {
      p2++;
    } else {
      p1++;
      p2++;
    }
  }

  if(p1 < str1.length) {
    return false
  } else if (p1 === str1.length) return true
}

// inputs and outputs examples
// `isSubsequence('hello', 'hello world') // true`
// `isSubsequence('sing', 'sting') // true`
// `isSubsequence('abc', 'acb') // false`

/*
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
*/
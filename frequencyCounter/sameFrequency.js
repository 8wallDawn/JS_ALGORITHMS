// 실행 ctrl + alt + n
function sameFrequency(n1,n2) {
  if(n1.length !== n2.length) return false;

  let frequencyOfn1 = {};
  let frequencyOfn2 = {};

  for(let val of Array.from(n1.toString())) {
    frequencyOfn1[val] = (frequencyOfn1[val] || 0) +1;
  }

  for(let val of Array.from(n2.toString())) {
    console.log(val)
    frequencyOfn2[val] = (frequencyOfn2[val] || 0) +1;
  }

  console.log(frequencyOfn1,frequencyOfn2)

  for(let key in frequencyOfn1) {
    if(frequencyOfn1[key] !== frequencyOfn2[key]) return false;
  }
  return true;
}

sameFrequency(182,282);
// 미해결!!!!!!!!!!!!!!!
function averagePair(arr, avg) {
  let p1=0;
  let p2=arr.length-1;

  while (p1 < p2) {
    if( (arr[p1]+arr[p2]) / 2 !== avg ) {
      p1++;
      console.log(p1)
    } 
    if( (arr[p1]+arr[p2]) / 2 !== avg ) {
      p2--;
      console.log(p2)
    }
    if( (arr[p1]+arr[p2]) / 2 === avg ) return console.log(true);
  }

  return console.log(false);
}

averagePair([1,3,3,5,6,7,10,12,19], 8)

// inputs and outputs examples
// averagePair([1,2,3], 2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19], 8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false

/*
function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}
*/
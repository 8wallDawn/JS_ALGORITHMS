function minSubArrayLen(arr, num) {
  let i = 0;
  let n = 1;

  while (i < arr.length){
    let sub = 0;
    let subTemp = 0;
    let gap = 0;

    for(let i=0; i<n; i++){
      sub+=arr[i];
    }

    subTemp = sub;

    for(let i=n; i<arr.length; i++) {
      subTemp = subTemp - arr[i-n] + arr[i];
      gap = Math.min(n-subTemp, n-sub)
    }
  }
}
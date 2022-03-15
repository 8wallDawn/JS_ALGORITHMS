function maxSubArraySum(arr, n) {
  if(arr.length < n) return null;

  let max=0;
  let maxTemp=0;
  for(let i=0; i<n; i++) {
    max+=arr[i];
  }

  maxTemp=max;

  for(let i=n; i<arr.length; i++) {
    maxTemp = maxTemp - arr[i-n] + arr[i];
    console.log(maxTemp)
    max = Math.max(max,maxTemp);
  }

  return max;
}

maxSubArraySum([-3,4,0,-2,6,-1], 2)

/*
💬입출력 예
1. `maxSubArraySum([100,200,300,400], 2) // 700`
2. `maxSubArraySum([1,4,2,10,23,3,1,0,20], 4) // 39`
3. `maxSubArraySum([-3,4,0,-2,6,-1], 2) // 5`
4. `maxSubArraySum([2,3], 3) // null`
*/
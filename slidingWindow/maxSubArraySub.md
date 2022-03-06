# Sliding Window(슬라이딩 윈도우) - maxSubArraySum
## 🧐문제 설명
배열 내의 숫자들 중 연속된 `n`개의 수의 합이 가장 큰 경우의 합이 리턴되는 함수 `maxSubArraySum()` 을 작성하시오.
* 시간 복잡도: -
* 공간 복잡도: -

### 💬입출력 예
1. `maxSubArraySum([100,200,300,400], 2) // 700`
2. `maxSubArraySum([1,4,2,10,23,3,1,0,20], 4) // 39`
3. `maxSubArraySum([-3,4,0,-2,6,-1], 2) // 5`
4. `maxSubArraySum([2,3], 3) // null`

## 😮작성 코드
```javascript
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
```

### 🤔접근 방법
1. `arr` 에 대해서 n개 만큼의 초기 창문을 만들고 이를 변수 `max`에 담는다.
2. `temp` 라는 현재 최대값을 담고있는 `max`와 비교하기 위한 변수를 만든다.
3. 
4. 
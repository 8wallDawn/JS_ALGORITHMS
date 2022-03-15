# 문제 제목
## 🧐문제 설명
인수로 받은 배열 내의 모든 값을 곱해 리턴하는 함수 `productOfArray()`를 만드시오.

### 💬입출력 예
1. `functionName('hello', 'hello world') // true`

## 😮작성 코드
```javascript
function productOfArray(arr) {
  if(arr.length === 0) return 1;

  console.log(arr[0])
  return arr[0] * productOfArray(arr.slice(1))
}
```

### 🤔접근 방법
인수로 받는 `arr`의 앞을 하나씩 빼면서 배열을 줄이고 `arr[0]`을 곱해나간다.
종료지점은 `arr.length`가 `0`이 되는 순간을 리턴하며 마지막으로 `slice(1)` 된 `arr`의 리턴값까지 곱해진 결과가 리턴되므로 `1`을 리턴하여 `NaN`이 나오지 않도록 한다.
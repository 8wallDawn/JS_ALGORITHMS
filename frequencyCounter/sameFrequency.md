# Frequency Counter - sameFrequency
## 🧐문제 설명
두개의 인수(`n1`,`n2`)를 받으며 순서와 관계없이 숫자별 갯수가 같은지를 판단하여 `true`와 `false`를 리턴하는 함수 `sameFrequency()`를 작성하시오.
* 시간 복잡도는 `O(n)` 이어야 한다.

### 💬입출력 예
1. `sameFrequency(182, 281) // true`
2. `sameFrequency(34, 14) // false`
3. `sameFrequency(3589578, 5879385) // true`
4. `sameFrequency(22, 222) // false`

## 😮작성 코드
```javascript
function sameFrequency(n1,n2) {
  if(n1.length !== n2.length) return false;

  let frequencyOfn1 = {};
  let frequencyOfn2 = {};

  for(let val of Array.from(n1.toString())) {
    frequencyOfn1[val] = (frequencyOfn1[val] || 0) +1;
  }

  for(let val of Array.from(n2.toString())) {
    frequencyOfn2[val] = (frequencyOfn2[val] || 0) +1;
  }

  for(let key in frequencyOfn1) {
    if(frequencyOfn1[key] !== frequencyOfn2[key]) return false;
  }
  return true;
}
```

### 🤔접근 방법
1. `n1`과 `n2`의 각 숫자별 빈도수를 객체에 담는다.
  이때, `n1`과 `n2`는 숫자로 `for of`문을 사용하기 위해서는 이터러블이 되어야 하기 때문에 객체로 바꾸어야 할 필요가 있다. 따라서 `toString()`을 통해서 문자열로 바꾼후 `Array.from()` 을 통해서 객체로 변환하였다.
n1 이 182인 경우 `frequencyOfn1` 은 {1:1, 8:1, 2:1} 이 되는 식이다.
2. `frequencyOfn1[key]`과 `frequencyOfn2[key]`. 즉, 같은 수에 대한 빈도 값이 다른 경우 `false` 를 리턴한다.
3. `false` 값이 리턴되는 경우가 없이 반복문을 마칠 경우 `true` 를 리턴한다.
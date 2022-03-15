# Frequency Counter - areThereDuplicates
## 🧐문제 설명
변동하는 인수를 받아 인수들 내에서 중복하는 값이 존재하는 경우 `true`를 반환하는 함수 `areThereDuplicates()`를 작성하시오.
* 시간 복잡도는 `O(n)` 이다.

### 💬입출력 예
1. `areThereDuplicates(1,2,3) // false`
2. `areThereDuplicates(1,2,2) // true`
3. `areThereDuplicates('a', 'b', 'c', 'a') // true`

## 😮작성 코드
```javascript
function areThereDuplicates() {
  let frequencyOfArguments = {};

  for(let val of arguments) {
    frequencyOfArguments[val] = (frequencyOfArguments[val] || 0) +1;
  }

  for(let key in frequencyOfArguments) {
    if(frequencyOfArguments[key] >= 2 ) return true;
  }
  return false;
}
```
위의 코드에서는 다음과 같은 오류가 발생했다...

_TypeError : undefined is not a function (evaluating 'arguments[Symbol.iterator()]')_

검색을 해봤지만 잘 나오지 않아 비슷한 에러를 최대한 찾아봤는데
**배열을 인수로 갖게 되었을 때 발생하게되는 에러** 인 것 같다.
그래서 인수를 푸는 `spread` 를 사용했다.


```javascript
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
```


### 🤔접근 방법
1. 인수의 개수는 유동적이므로 `arguments`를 적극적으로 활용한다.
---
**arguments**

`arguments`는 `Array` 형태의 객체이다.

---
2. `arguments` 의 값들을 `key`로 하고 빈도수를 `value`로 하는 객체를 생성한다.
3. 객체의 `value` 값이 2이상이면 `true`를 반환한다.
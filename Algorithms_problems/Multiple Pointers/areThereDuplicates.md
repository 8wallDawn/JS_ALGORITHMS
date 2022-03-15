# Multiple Pointers(다중포인터) - areThereDuplicates
## 🧐문제 설명
변동하는 인수를 받아 인수들 내에서 중복하는 값이 존재하는 경우 `true`를 반환하는 함수 `areThereDuplicates()`를 작성하시오.
* 시간 복잡도는 `O(n)` 이다.

### 💬입출력 예
1. `areThereDuplicates(1,2,3) // false`
2. `areThereDuplicates(1,2,2) // true`
3. `areThereDuplicates('a', 'b', 'c', 'a') // true`

## 😮작성 코드
```javascript
function areThereDuplicates(...args) {
  args.sort((a,b) => a > b);

  let start = 0;
  let next = 1;

  while(next < args.length){
    if(args[start] === args[next]){
        return true;
    }
    start++
    next++
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
2. multiple pointers 알고리즘은 정렬된 형태의 인수를 활용하기 때문에 `arguments` 객체를 정렬 시킨다.
3. 첫번째 값과 두번째 값에 포인터를 두고 연속된 두 수를 비교했을 때 같은 경우 정렬된 객체내에서 중복이 발생한다는 것으로 `true` 값을 반환한다.
4. 연속된 두 수 중에 중복이 발생하지 않은 경우 `false`를 반환한다.
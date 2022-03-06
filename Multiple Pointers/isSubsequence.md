# Multiple Pointers(다중포인터) - isSubsequence
## 🧐문제 설명
문자열 `str1`의 각 글자의 순서와 맡게 `str2`가 `str1`의 모든 글자를 포함하고 있는지를 반환하는 함수 `isSubsequence()`를 작성하시오.
* 시간 복잡도는 `O(n)` 이다.

### 💬입출력 예
1. `isSubsequence('hello', 'hello world') // true`
2. `isSubsequence('sing', 'sting') // true`
3. `isSubsequence('abc', 'acb') // false`

## 😮작성 코드
```javascript
function isSubsequence(...args) {
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
1. `str1`과 `str2`의 첫번째 문자를 각각 `p1`과 `p2`의 포인터를 잡는다.
2. `str1`의 첫번째 값이 `str2`의 문자와 같을 때 까지 `p2`를 증가시킨다.
3. 같아지면 `str1`의 `p1`을 증가시키고 다시 같을 때 까지 `p2`를 증가시킨다.
4. 만약 같은 값이 나오지 않고 `str2`를 모두 지나칠 경우 `false`를 리턴한다.
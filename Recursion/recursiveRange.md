# 문제 제목
## 🧐문제 설명
인수 `num` 부터 `0` 까지의 합을 구하는 함수 `recursiveRange()`를 작성하시오.

### 💬입출력 예
1. `recursiveRange(6) // 21`
2. `recursiveRange(10) // 55`

## 😮작성 코드
```javascript
function recursiveRange(num) {
  if(num === 0) return 0;
  return num+recursiveRange(num-1);
}
```

### 🤔접근 방법
1. 재귀적으로 접근하기 위해서 `num`이 `1`씩 줄어들면서 더해야한다.
2. 그럼 종료지점이 중요한데, 최종 리턴값에 `num`이 `0`일 때의 값 또한 연산에 포함되기 때문에 연산된 최종 리턴값에 영향을 미치지 않도록 `0`을 리턴한다.
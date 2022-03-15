# 문제 제목
## 🧐밑수와 지수를 인수로 받아 제곱한 결과를 반환하는 함수 power() 를 작성하시오.

### 💬입출력 예
1. `power(2,0) // 1`
2. `power(2,2) // 4`
3. `power(2,4) // 16`

## 😮작성 코드
```javascript
function power(base, exponent) {
  if(exponent === 0) return 1;
  return base * power(base, exponent-1);
}
```

### 🤔접근 방법
1. `exponent` 즉, 지수는 몇번 곱하는지를 의미하기도 한다. 따라서 종료지점(basecase)를 exponent를 기준으로 잡는다.
주의할 점은 1일때를 생각하면 안된다. 지수가 0인 경우, 1을 반환해야 하면서도 지수가 0이 아니더라도 마지막에 1까지 줄어들면 1을 곱하는 꼴이 되기 때문에 값에 영향을 미치지 않는다.
2. 따라서 `exponent` 가 `0`이 될 때까지 반복하며, `0`인 경우 `1`을 리턴한다.
3. 최종함수의 return 값은 base * base인데 지수만 줄어들며 반복하면 된다.
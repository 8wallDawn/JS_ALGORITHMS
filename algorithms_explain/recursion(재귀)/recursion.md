# 재귀 Recursion

## 재귀(recursion)

---

재귀 함수란 자신을 호출하는 함수를 의미한다. 

`for`문과 같은 반복문은 때로 재귀로 작성하는 것이 더욱 효율적일 수도 있다.

⚠주의할 점으로는 자기 자신을 호출하는 함수이기 때문에 종료지점이 명확하지 않으면, 무한루프에 빠질 수 있다. 이러한 종료지점을 `Base Case` 라고 부르기도 한다.

또한, 재귀의 깊이가 길어질 수록 스택의 제한으로 오류가 발생할 가능성이 있다.

### 재귀함수의 필수 요소

- Base Case(종료지점)
- Different Input

### 응용 사례

재귀는 꽤나 많은 곳에서 사용된다.

JSON.parse/JSON.stringify

document.getElementById

DOM traversal(순회) 알고리즘

객체 순회

## 콜 스택(Call Stack)

---

함수 호출을 담아 관리하는 스택의 한 데이터 구조를 말한다.

함수가 호출되면 콜 스택의 맨 위에 위치하며, `push` 하게 된다.

반대로 `return` 을 만나거나 함수가 끝나면 컴파일러는 위부터 제거(pop) 한다.

## 예제

---

### 예제 1) Count Down

재귀 함수의 간단한 예제로 카운트 다운 코드를 예로 살펴보자.

```jsx
function countDown(num) {
	if(num <=0 ) {
		console.log("카운트 다운이 끝났습니다.");
		return; // Base Case
	}
	num--; // Different Input
	countDown(num);
}
```

자기 함수를 호출 하기 전에 종료 지점이 `if` 문을 통해서 존재하며 `return`을 통해 종료하는 것을 볼 수 있다.

반환하는 결과가 현재 함수에는 없지만 분명한 점은 `return`을 통해서 함수를 종료한다는 것이다.

그리고 `num--` 를 통해서 인수에 변화를 주어 종료지점에 다다르며, 함수의 목적에 맞게끔 변화하여 재귀함수를 호출하고 있다.

### 예제 2) Sum Range

다음 예제는 인수 `num` 으로 부터 `1` 까지의 합을 구하는 재귀함수이다.

```jsx
function sumRange(num) {
	if(num === 1) return 1; // Base Case
	return num + sumRange(num-1); // (num-1) => Different Input
}
```

`num` 가 `1` 이 되었을 때, 종료되는 함수로 최종 결과물 즉, `num + sumRange(num-1)` 을 반환하는 함수이다.

간단하게 `sumRange(3)`를 호출하여 함수의 진행을 순서대로 나열하여 살펴보자.

```jsx
sumRange(3)
	   return 3 + sumRange(2)
								return 2 + sumRange(1)
													 return 1
//=> 3 + 2 + 1
```

이를 콜스택의 진행 순서로 나열하면 다음과 같다.

|  |  |  | sumRange(1) |  |  |
| --- | --- | --- | --- | --- | --- |
|  |  | sumRange(2) | sumRange(2) | sumRange(2) |  |
| 콜 스택 | sumRange(3) | sumRange(3) | sumRange(3) | sumRange(3) | sumRange(3) |
| 리턴 값 | 3+sumRange(2) | 2+sumRange(1) | 1 | 2+1 | 3+2+1 |

### 예제 3) ! : 팩토리얼

재귀 함수의 간단한 예로 많이 등장하는 팩토리얼에 대한 재귀함수를 살펴보자.

```jsx
function factorial(num) {
	if(num === 1) return 1;
	return num * factorial(num-1);
}
```

예제 2) 와 거의 동일하며 종료지점이 아닌 `return` 값의 연산이 `+` 이 아닌 `*` 인 예이다.

팩토리얼(!) 은 수학적으로 `4! = 4 * 3 * 2 * 1` 을 의미하기에 동작의 원리는 예제 2)와 동일하다.

## 😅재귀 함수 코드 작성의 실수

---

### #1 종료 지점의 오류

종료 지점에 대해 잘못 명시되었거나 빠진 경우이다.

실제로 예제 2)에 대해서 종료지점인 코드를 제거하고 실행해보면 다음과 같은 오류가 발생한다.

```jsx
function factorial(num) {
	// if(num === 1) return 1;
	return num * factorial(num-1);
}
```

![콜스택을초과하였습니다](https://user-images.githubusercontent.com/79589584/158200634-6512bded-1eb0-4205-9b40-d17a4a33f1df.JPG)

위의 에러는 `콜 스택의 최대 크기를 초과하였습니다.` 의 의미이다. 이러한 에러를 **“Stack Overflow”** 라고 한다.

### #2 재귀 함수 인수의 오류

만약 호출 되는 재귀 함수에 첫 호출될 때의 인수와 동일한 인수로 호출이 된다면 어떻게 될까?

```jsx
function factorial(num) {
	if(num === 1) return 1;
	return num * factorial(num); // factorial(num-1) => factorial(num)
}
```

같은 결과가 반복되며 결국 종료지점에 도달하지 못해 콜 스택이 계속 쌓여 #1과 동일한 **“Stack Overflow”** 가 발생한다.

### #3 return 의 부재

이번에는 종료 지점의 `return` 코드를 `console.log(1)` 로 바꾸어 보자.

```jsx
function factorial(num) {
	if(num === 1) console.log(1)
	return num * factorial(num); // factorial(num-1) => factorial(num)
}
```

`return` 은 `return` 뒤에 붙은 코드를 실행하고 콜 스택을 `pop`해주는데, 종료지점이 되어야 할 부분에서 `return` 이 아닌 `console.log(1)` 이라면 콘솔 창에 `1` 의 값만이 출력되고 계속해서 함수의 실행이 지속되어 재귀 함수는 종료되지 않을 것이다.

#1 과 #2와 마찬가지로 같은 **“Stack Overflow”** 가 발생한다.
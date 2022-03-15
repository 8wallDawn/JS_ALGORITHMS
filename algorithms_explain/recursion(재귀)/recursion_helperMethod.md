# 헬퍼 메소드(재귀함수와 함께 사용되는 디자인 패턴)

---

**💡** 
*디자인 패턴*   

객체 지향 프로그래밍 설계를 할 때 자주 발생하는 문제들을 피하기 위해 사용되는 패턴

---


## 헬퍼 메소드

헬퍼 메소드는 재귀 함수와 함께 자주 사용되는 디자인 패턴이다.

간단한 형식에 대해서 살펴보면 다음과 같다.

```jsx
function outer(input) {
	var outerScopedVariable = [];

	function helper(helperInput) {
		// 외부 변수를 수정 하는 코드를 작성하는 영역
		helper(helperInput--)
	}

	helper(input);

	return outerScopedVariable;
}
```

위 코드에서 `outerScopedVariable` 변수가 `[]` 배열을 담고 있다.

즉, 헬퍼 메소드는 일반적으로 배열이나 데이터 목록과 같은 것들을 컴파일해야 할 때 사용하는 디자인 패턴이다.

## 예제

---

### #1 collectOddValues

위 함수는 인수로 받는 배열 `arr` 에 대해서 홀수 값들을 모아 반환하는 함수이다.

그럼 코드를 살펴 보자.

```jsx
function collectOddValues(arr) {
	let result = []; // odd 인 값들을 찾아 넣을 빈 배열

	function helper(helperInput) {
		if(helperInput.length === 0 ) {
			return ;
		}
		
		if(helperInput[0] % 2 !==0 ) {
			result.push(helperInput[0])
		}

		helper(helperInput.slice(1))
	}
	
	helper(arr);

	return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])
```

`collectOddValues(arr)` 의 동작원리에 대해서 이해해 보자.

위의 함수의 동작은 `helper()`에서 대부분 이루어 진다. `helper()` 에 대해서 알아보자.

1. `if(helperInput.length === 0) { return }` 
    
     `arr` 을 받아서 길이가 `0` 인지를 확인한다.
    
    이는 인수로 받은 배열에 남은 값이 있는지를 확인하고 빈 배열인 경우 함수를 종료한다.
    
2. `if(helperInput[0] % 2 !==0 ) { result.push(helperInput[0]) }`
    
    `arr[0]` 의 값이 홀수 인지 확인한다.
    
    홀수인 경우 `result` 에 추가한다.
    
3. `helper(helperInput.slice(1))`
    
    2.를 통해 `arr[0]` 값이 홀수인지 아닌지를 확인하였고 홀수인 경우 `result` 에 `push` 함으로서 홀수인 값을 담았다. 재귀 함수를 통해서 다시 인수 `arr` 의 첫번째 값에 대해서 홀수의 여부를 판단하므로 이미 확인한 `arr` 의 첫번째 값을 제거하여 다음값이 재귀함수를 통해서 확인되도록 한다.
    

위의 과정을 통해서 `result` 에 홀수 값들을 담아 반환하면서 함수를 종료한다.
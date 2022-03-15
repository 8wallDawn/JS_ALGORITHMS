# 순수 재귀(Pure Recursion)

앞 전의 헬퍼 메소드를 통해서 재귀 함수를 만들어 내부 함수를 재귀 함수로 이용하는 방법이 아닌 순수하게 초기 자신인 외부함수를 재귀 함수로 사용하는 것을 **순수 재귀**라고 한다.

헬퍼 메소드를 통해서 작성했던 `collectOddValues()` 함수를 순수 재귀 함수로 바꾸어 보자.

```jsx
// 헬퍼 메소드를 통한 재귀함수
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

```jsx
// 순수 재귀함수
function collectOddValues(arr) {
    let newArr = [];

    if(arr.length === 0) {return newArr;}

    if(arr[0] % 2 !==0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    return newArr;
}

collectOddValues([1,2,3,4,5])
```

위의 헬퍼 함수와는 다르게 `result` 처럼 빈 배열에 홀수 값들을 담아내는 것이 아닌 `collectOddValues()` 자체가 재귀 호출되기 때문에 `newArr` 의 빈 배열은 매번 생성되어 홀수 값들이 낱개로 담겨진 배열로 채워진다.

예제의 실행 순서에 따른 `newArr` 의 값들을 살펴보자.

```jsx
// 1.
[1].concat(collectOddValues([2,3,4,5]))
		    // 2.
			[].concat(collectOddValues([3,4,5]))
					 // 3.
					 [3].concat(collectOddValues([4,5]))
								// 4.
								[].concat(collectOddValues([5]))
					  	  	  			  // 5.
										  [5].concat(collectOddValues([]))
												     // 6.
												     []

```

**`concat()`** 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반한다.

즉, `newArr.concat(collectOddValues(arr.slice(1)))` 은 `[1]`에  `[]` `[3]` `[]` `[5]` `[]` 를 합친 값과 같다.

헬퍼 메소드를 사용한 경우와 비교하였을 때, 지금의 경우엔 순수 재귀가 더욱 짧은 코드로서는 괜찮다고 볼 수 있다.

하지만 무조건 순수 재귀가 좋다고 할 수는 없다고 생각이 들기도 한다.

물론 함수의 이름을 잘 작성해서 코드를 보지 않아도 그 역할을 알수 있겠지만, 개인적인 생각으로는 헬퍼 함수의 경우엔 헬퍼 함수가 하는 역할을 이해함으로서 보다 함수의 의도에 대해서 쉽게 알 수도 있겠다고 본다.

순수 재귀 함수를 활용하는 방법은 매우 다양하고 항상 순수 재귀 함수를 사용하여 함수를 작성할 수 있다고 한다.

그럼 순수 재귀 함수를 작성할 때는 어떻게 접근하는 것이 좋을까?

어떤 종류의 값들을 축적하여 반환하는 함수에 대해 헬퍼 함수 없이 순수 재귀를 통한 코드를 작성하려 할 때

1. 배열의 경우. `slice()` , `spread 연산자` , `concat()` 함수를 통해 본래의 배열을 변경하지 않도록 배열 복사본을 만드는 방법을 사용한다.
2. 문자열의 경우, 변경이 불가능하기 때문에 복사본을 만들기 위해 `slice()` , `substr()` , `substring()` 을 통해 문자열의 본사본을 만든다.
3. 객체의 경우, `assign()` , `spread 연산자` 를 통해서 복사본을 만들어 활용한다.
# Frequency Counter(빈도수 카운터)

실제로 존재하는 알고리즘 패턴은 아니며, 강사가 임의로 명명한 패턴 풀이법이다.

```jsx
// 예제
/* 배열 두개를 받아 한 배열이 다른 배열의 제곱수가 모두 포함되어 있는 지 확인하는 함수
   > 제안사항
     - 순서는 고려하지 않는다.
		 - 단, 한 배열의 제곱수는 다른 배열에 일대일 대응되어야 한다.
*/
// input
[1,2,3] [4,1,9] // 1=>1 , 2=>4, 3=>9 true
[1,2,3] [1,9] // false
[1,2,3] [1,1,9] // false
```

위와 같은 문제를 풀때에 단순한 풀이 방법으로 `이중 for문` 을 생각할 수 있다. 두 배열을 각각 순환하여 대조하는 방법을 떠올릴 것이다.

`이중 for문` 의 시간 복잡도는 `N^2` 이다. 

강의에서는 첫번째 배열을 순환하면서 각각의 제곱값( `indexOf(제곱값)` )이 두번째 배열에 있는 지를 확인하는 과정을 통해서 결과값을 반환하는 코드였는데, 이또한 `indexOf()` 는 `for문` 과 같이 배열 내의 값들을 순차적으로 순환하는 O(n) 이다.

즉, `for` 문과 내부의 `indexOf()` 로 중첩 루프로 역시 빅오는 `N^2` 가 된다.

이러한 중첩 루프를 피하는 방법이 강의에서 소개하는 Frequency Counter 이다.

해당 패턴 풀이의 장점을 다음과 같이 정의한다.

- 객체 또는 집합에 대한 값이나 값의 빈도를 모으는데 유용하다.
- 배열이나 문자열 내에서 중첩 반복문의 `O(n^2)` 의 시간복잡도나 공간복잡도를 피하는 코드 작성에 도움이 될 때가 있다.

```jsx
// 중첩 반복문
function isTwoSquared(arr1, arr2) {
	if(arr1.length !== arr2.length) return false;
	
	for(let i=0; i<arr1.length; ++i) {
		let correctIdx = arr2.indexOf(arr1[i] ** 2)
		if(correctIdx === -1) return false;
		arr2.splice(correctIdx,1)
	}
	return true;
}
```

위의 코드의 시간복잡도를 줄이는 방법은 중첩 반복문을 깨는 방법이다.

1. 다수의 중첩문의 시간복잡도는 중첩 반복문보다 시간복잡도가 낮다.
2. 배열은 순서가 있다. 이를 객체로 정리 또는 변환하여 `key`값을 통한 `O(1)` 이 가능함을 이용한다.

```jsx
// 단일 반복문과 객체의 key값을 이용
function isTwoSquared(arr1, arr2) {
	if(arr1.length !== arr2.length) return false;

	// 빈 객체 2개 생성
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	// 각 배열의 값별 빈도수를 객체에 저장
	for(let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val]) || 0) +1
	}
	for(let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val]) || 0) +1		
	}

	// 단일 for문 내에 key값을 통한 대조로 O(n)과 O(1)이므로 총 O(n)의 시간복잡도
	for(let key in frequencyCounter1) {
		if(!(key**2 in frequencyCounter2)) return false;
		if(frequencyCounter1[key] !== frequencyCounter2[key**2]) return false;
	}
	return true;
}
```

---
**💡** 
다만, `for in` 과 `for of` 문의 사용에 대해서 명확하게 할 필요가 있다.
위는 `arr` 즉, 배열을 인수로 받기 때문에 이터러블이므로 `for of` 문의 사용이 가능하다. `for of` 문은 `value` 값에 접근이 가능한데 `for in` 의 경우에는 `value` 값에 접근할 수 없기 때문에 
만약 데이터가 배열이 아닌 값에 대해서 값별 빈도수를 객체에 저장하기 위해서는 `value` 값에 접근할 수 있도록 배열로 바꾸거나 일반 `for` 문을 사용해야 한다.

---
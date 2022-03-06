# 분할 정복(Divide and Conquer)

## 분할 정복

분할 정복은 데이터 또는 문제를 작은 조각으로 쪼개어 해결하고 그 결과를 다시 전체 문제를 해결하며 합쳐 나아가는 방법을 말한다.

글로는 조금 이해하기가 어려울 수 있어 분할 정복을 통해 푸는 예시 중 하나를 그림을 통해서 살펴보자면,

![https://media.vlpt.us/images/emily0_0/post/d35d6b3f-e7d9-44e7-934f-fb9856de69e2/merge-sort.gif](https://media.vlpt.us/images/emily0_0/post/d35d6b3f-e7d9-44e7-934f-fb9856de69e2/merge-sort.gif)

[<사진 출처 : 블로그 Emily0_0>](https://velog.io/@emily0_0/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Merge-Sort)

분할 정복 중 하나인 병합 정렬의 예시로 애니메이션 효과를 통해서 이해하기에 너무 잘 되어 있다.

### 분할정복 관련 문제들

1. 정렬(퀵 정렬, 병합 정렬)
2. 큰 숫자 곱하기(Karatsuba 알고리즘) N자리 수 2개를 곱하여 결과를 나타내는 알고리즘
3. 이진 탐색(Binary Search)
4. Closet Pair of Points 모든 point 쌍의 거리 중 최소의 거리를 찾는 문제
5. Stassens’s 알고리즘 두 행렬을 곱하는 효과적인 알고리즘
6. Cooley-Tukey Fast Fourier Transform(FFT) 알고리즘

## 첫번째 예제

분할정복과 관련된 문제 중 <이진탐색>에 해당하는 문제로 풀이 방법으로 가장 간단한 선형 검색이 있고 분할정복 방법을 통한 이진검색이 있다. 두가지를 비교하며, 분할 정복에 대해 이해해보자.

```jsx
// 예제
/* 정렬된 배열 arr과 임의의 숫자 n을 인수로 받아 arr 내에 n의 index 값을 리턴하는 함수 search()를 만드시오.
   > 제안사항
		 - input 값 arr은 정렬된 배열이다.
     - 배열 arr 내부에 n이 없는 경우 -1을 리턴한다.
		 - 결과값은 Number이다.
*/
// input
search([1,2,4,6,3,5,8,2], 4) // => 2
search([1,2,5,2,8,1,5], 8) // => 4
search([], 4) // => -1
```

### 선형 검색

단순한 접근방법은 `n` 을 `arr` 에서 `for` 문을 통해 첫번째 수부터 마지막 수까지를 대조하고 일치하는 경우 해당 배열의 `index` 값을 리턴하면된다. 

```jsx
function search(arr, n) {
	for(let i=0; i<arr.length; ++i) {
		if(arr[i] === n) return i;
	}
	return -1;
}
```

- 시간 복잡도 : `O(n)` 이다.

### 이진 검색

이진 검색 방법은 `arr` 의 `index`를 반으로 나누어 `n` 보다 크거나 작음을 이용하여 범위를 줄여나가는 것을 반복하는 것이다.

따라서 `arr` 은 정렬된 상태어야 하는 것이 기본 조건이 된다.

```jsx
function search(arr,n) {
    let minIdx = 0;
    let maxIdx = arr.length -1;

    while (minIdx <= maxIdx) {
        let middleIdx = Math.floor((minIdx+maxIdx)/2);

        if(arr[middleIdx] < n) {
            min = middleIdx+1;
        } else if (arr[middleIdx] > n) {
            max = middleIdx-1;
        } else return middleIdx;
    }

    return -1;
}
```

- 시간 복잡도 : `O(logN)`
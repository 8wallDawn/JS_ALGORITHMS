# 삽입 정렬(Insertion Sort)

## 삽입 정렬(Insertion Sort)

---

삽입 정렬은 두번째 인덱스에 위치한 값을 시작으로 앞에 위치한 값들에 대해 크기를 비교하며 좌 또는 우로 배치해 삽입 하 듯이 정렬하는 방식이다.

![https://t1.daumcdn.net/cfile/tistory/991371375C3DF2252C](https://t1.daumcdn.net/cfile/tistory/991371375C3DF2252C)

## 삽입 정렬의 의사 코드

---

### 정렬될 값을 변수에 넣어서 삽입정렬하는 방법

![https://t1.daumcdn.net/cfile/tistory/257DED465356567A07](https://t1.daumcdn.net/cfile/tistory/257DED465356567A07)

1. 배열의 두 번째 요소를 탐색의 첫번째 요소로 선택한다.
2. 정렬이 될 값을 변수에 넣어 보관해둔다.
3. 정렬될 요소와 앞의 요소와 비교한다.
    1. 앞의 요소보다 큰 경우, 비교를 멈춘다.
    2. 앞의 요소보다 작은 경우, 앞의 요소를 한칸 올린 위치에 복사한다.
4. 정렬될 값이 앞의 요소보다 큰 경우 사이클을 종료하고 정렬된 값을 삽입한다.
5. 정렬될 다음 값을 변수에 넣고 위의 `3, 4.` 의 과정을 두번째 값부터 마지막 값까지 반복한다.

```jsx
function insertionSort(arr) {
		// 1. 정렬이 될 첫번째 시작 요소는 배열의 두번째 요소이다.
    for(let i=1; i<arr.length; i++){
        let tempVal = arr[i]; // 정렬이 될 요소를 변수에 담아둔다.
        
				// 2. 정렬이 될 요소와 비교되는 요소는 앞전의 값 들이다.
        for(var j=i-1; j>-1; j--) {
            if(tempVal < arr[j]) {
								// 
                arr[j+1] = arr[j];
            } else break; 
										// 정렬이 될 요소보다 앞의 요소가 더 작은 경우 부터는 더 이상의 값의 비교가 의미 없다.
										// 또한 계속 진행되면 j의 값이 계속 1씩 줄어든다.
        }
        arr[j+1] = tempVal; // for문으로 인해 j에 한번 더 --가 되었으므로 교환해야할 위치 값은 j+1이다.
    }
    return arr;
}
```

<aside>
💡 내부 for문에서 조건식을 `j>-1 && arr[j] > currentVal;` 로 하면,
`if ~ else문` 을 쓰지 않을 수 있다.

</aside>

```jsx
function insertionSort(arr) {
// ...
					for(var j=i-1; j>-1 && arr[j] > tempVal; j--) {
					    arr[j+1] = arr[j];
					}
// ...
		return arr;
}
```

### 정렬될 값이 들어갈 위치값을 계산하여 삽입정렬하는 방법

1. 배열의 두 번째 요소를 탐색의 첫번째 요소로 선택한다.
2. 두번째 요소를 앞의 요소와 비교한다.
    1. 앞의 요소보다 큰 경우 제자리에 위치한다.
    2. 앞의 요소보다 작은 경우 위치값(index)를 `-1` 한다.
3. 위의 1.~2.의 과정을 배열 만큼 반복한다.

```jsx
function insertionSort(arr) {
    for(let i=1; i<arr.length; i++){
        let currentVal = arr[i];
        let currentIdx = i;
        
        for(var j=i-1; j>-1; j--) {
            if(currentVal < arr[j]) {
                console.log(arr[j], currentVal);
                arr[j+1] = arr[j];
                currentIdx--;
            } else break;
        }
        arr[currentIdx] = currentVal;
        console.log("1 회전");
    }
    return arr;
}
```

## Big O

---

위에서 코드를 통해 `삽입 정렬` 이 `이중 for문` 을 통해 정렬된다는 것을 우리는 알고 있다.

따라서 `O(n^2)` 의 시간 복잡도를 평균적으로 가질 것이 예상된다.

위키백과에 따른 선택 정렬의 `Big O`를 보면 아래와 같다.

### 시간 복잡도

- 평균, 최악 : 비교, 교환 `O(n^2)`
- 최선 : 비교 `O(n)` , 교환 `O(1)`
모두 정렬되어 있는 경우 한번씩 만 비교를 하게되므로 `O(n)` 의 시간 복잡도를 갖는다.

### 공간 복잡도

- `O(n)`
주어진 배열 안에서 교환이 이루어지기 때문에 일반적으로 `배열`은 `O(n)` 의 공간복잡도를 갖는다.

## 장•단점

---

### 장점

1. 알고리즘이 단순하다.
2. 정렬하고자 하는 배열 내에서 값의 교환이 이루어져, 정렬을 위한 다른 메모리 공간을 필요로 하지 않는 **제자리 정렬(in-place sorting)** 이다.
3. 동일한 값의 키 값이 변하지 않는 **안전 정렬(stable sort)** 이다.

### 단점

1. 평균 시간 복잡도가 `O(n^2)` 으로 비효율적이다.
2. 배열의 길이가 길 수록 비효율적이다.

## 정렬 알고리즘과의 비교

---

- 거품 정렬
거품 정렬의 경우 한 사이클 내에서도 많은 교환이 일어나지만, 선택 정렬의 경우 사이클 당 한번의 교환만이 일어나기 때문에 거품 정렬보다는 항상 우수하다.
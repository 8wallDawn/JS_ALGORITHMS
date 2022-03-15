# 선택 정렬(Selection Sort)

## 선택 정렬(Selection Sort)

---

선택 정렬은 한수를 고정으로 하고 정렬하고자 하는 기준에 더욱 가까운 수를 나머지 값에서 찾아 교체하는 것을 반복하는 정렬이다.

이해를 돕기위해 오름차순을 통해 정렬한다고 가정하면, 첫 값과 나머지 값들을 비교하며 최소값을 찾고 첫 값이 최소값이 아닌 경우 둘의 위치를 교환한다.

이를 반복하면 배열의 앞에 최소값이 순서대로 위치하게 되어 정렬이 되는 방식이다.

![https://gmlwjd9405.github.io/images/algorithm-selection-sort/selection-sort.png](https://gmlwjd9405.github.io/images/algorithm-selection-sort/selection-sort.png)

## 선택 정렬의 의사코드

---

의사코드를 작성하기에 앞서서 정렬의 기준을 오름차순으로 설정했다는 가정하의 의사코드이다.

1. 배열의 첫번째 값을 최소값으로 설정한다.
2. 첫번째 값 이후에 위치한 값들과 비교하며, 비교 대상의 값이 더 작을 경우 최소값으로 설정한다.
    a. 더 작지 않은 경우 최소값을 교환하지 않고 이어서 남은 값을 비교한다.
3. 첫 사이클이 끝나고 나면, 최소값의 위치(index)와 첫번째 값의 위치를 교환한다.
4. 첫번째값 이후의 수도 1.~3. 까지의 과정을 반복하며, 마지막 값은 자동으로 정렬되어 남기 때문에 배열의 길이보다 하나 적은 수 만큼 반복한다. <span style="color:green">* 마지막 값은 비교대상이 없다는 것이 정확하다.</span>

```jsx
function selectSort(arr) {
    for(let i = 0; i < arr.length-1; i++) {
				// 1. 맨 앞의 값의 인덱스를 가장 최소값인 것으로 설정.
        let indexOfMin = i;

				// 2. 나머지 값들과 비교
        for(let j = i+1; j < arr.length; j++) {
						// 2. 비교값이 더 작은 경우 최소값의 인덱스를 업데이트
            if(arr[indexOfMin] > arr[j]) indexOfMin = j;
        }
				
				// 3. 값의 비교의 순회가 끝나고 나면 가장 최소값으로 설정된 값과 맨앞의 값을 교환
        [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
    }

    return arr;
}
```

그런데 이에 대해서 정렬이 이미 된 배열 `[1,2,3,4,5,6]` 을 인수로 주게되면, 3. 의 코드.
즉, 값의 교환이 일어나는 코드가 동작하게 된다. 무의미한 코드의 동작이 있는 것이다.

값의 교환이 일어날 때 마다 최소갑의 위치값과 비교되는 값의 위치값이 출력되도록 해보았다.

![선택정렬의 비효율적 교환코드 작동](https://user-images.githubusercontent.com/79589584/158414277-867fbc63-250b-453d-b8c0-ff8e47590e31.JPG)

최소값이 비교되는 값과 같음에도 교환이 되는 코드가 동작한다는 의미이다.

이러한 불필요한 동작이 일어나지 않도록 코드를 수정하였다.

```jsx
function selectSort(arr) {
    for(let i = 0; i < arr.length-1; i++) {
        let indexOfMin = i;

        for(let j = i+1; j < arr.length; j++) {
            if(arr[indexOfMin] > arr[j]) indexOfMin = j;
        }

        if(indexOfMin !== i) {
            console.log(i, indexOfMin);
            [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
        }
    }

    return arr;
}
```

![선택정렬의 비효율적 교환코드 작동 해결](https://user-images.githubusercontent.com/79589584/158414288-4ad7edeb-3c44-4f30-9b5a-b29c21cdc12d.JPG)

이를 실행하면 위와 같이 최소값의 위치가 비교되는 값과 동일한 경우 값의 교환이 일어나지 않는다.

## 선택 정렬의 개선

---

### 이중 선택 정렬

한번의 탐색에서 지금까지는 최소값만을 찾았다면 이중 선택 정렬은 최대값을 함께 찾음으로 탐색의 횟수가 절반으로 줄어들게 되는 효과가 있다.

```jsx
function doubleSelectionSort(arr) {
    // 배열의 시작과 끝지점의 인덱스 값
    let start = 0;
    let end = arr.length-1;

    while(start < end) {
				// 최대값과 최소값의 인덱스 값과 초기 인덱스를 범위의 시작과 끝값으로 설정
        let indexOfMin = start;
        let indexOfMax = end;

				// 탐색의 범위는 시작값부터 끝값
        for(let i = start; i<end; i++) {
            if(arr[indexOfMin] > arr[i]) indexOfMin=i;
            if(arr[indexOfMax] < arr[i]) indexOfMax=i;
        }
        
        if(indexOfMin !== start) {
            [arr[start], arr[indexOfMin]] = [arr[indexOfMin], arr[start]];
        }
        if(indexOfMax !== end) {
            [arr[end], arr[indexOfMax]] = [arr[indexOfMax], arr[end]];
        }
        
        start++;
        end--;
    }
    return arr;
}
```

## Big O

---

위에서 코드를 통해 `선택 정렬` 이 `이중 for문` 을 통해 정렬된다는 것을 우리는 알고 있다.

위키백과에 따른 선택 정렬의 `Big O`를 보면 아래와 같다.

### 시간 복잡도

- 평균, 최악, 최선 : 비교 `O(n^2)` , 교환 `O(n)`
코드를 보면, 값의 비교는 `내부 for문` 에서 이루어 지지만 값의 교환은 `외부 for문` 에서 이루어지는 것을 알 수 있다.

### 공간 복잡도

- `O(1)`

때문에 이러한 버블 정렬은 그리 효육적인 방법은 아니라서 일반적으로 사용되지는 않는다고 한다.

### 정렬 알고리즘과의 비교

- 거품 정렬
거품 정렬의 경우 한 사이클 내에서도 많은 교환이 일어나지만, 선택 정렬의 경우 사이클 당 한번의 교환만이 일어나기 때문에 거품 정렬보다는 항상 우수하다.
# 슬라이딩 윈도우

## 슬라이딩 윈도우(Sliding Window)

배열이나 문자열 같이 연속적인 데이터 집합에 대해서 일정 범위(구간) 값을 비교할 때 사용하는 알고리즘으로

알고리즘의 이름처럼 하나의 창문(배열이나 연속적인 데이터 내에 설정한 구간)을 옮겨(슬라이딩) 가며, 구간내의 값들을 통해 결과를 도출하는 알고리즘이다.

## 첫번째 예제

```jsx
// 예제
/* 첫번째 인수 배열 arr에서 두번째 인수 n개의 범위만큼 합한 결과가 최대값일 때 리턴하는 함수 maxSubArraySum()을 만드시오
   > 제안사항
		 - input 값 arr은 정렬되지 않은 배열이다.
     - 배열 arr 내부에 값이 없거나 n개 보다 적은경우 결과값은 null이다.
		 - 결과값은 Number이다.
*/
// input
maxSubArraySum([1,2,4,6,3,5,8,2], 2) // => 8+5 => 13
maxSubArraySum([1,2,5,2,8,1,5], 4) // 2+5+2+8 => 17
maxSubArraySum([], 4) // => null
```

단순한 접근방법은 배열의 첫 `index` 부터 `n` 개 만큼의 수를 더하되, 첫 시작점은 `arr.length-n+1` 까지만 가능하다. 

그 이유는 합해지는 범위가 `n` 개 보다 작아지는 상황은 있을 수 없기 때문이다.

따라서 첫 `index` 부터 `arr.length-n+1` 까지를 시작점으로 잡는 반복문 안에 해당 `index`의 값 부터 `n` 개를 더한 값을 `temp` 에 저장해두고 다음 `index+1` 의 값과 비교하여 최종적으로 크게 남은 값을 리턴하면 된다.

```jsx
function maxSubArraySum(arr, n) {
		// 더하는 수의 갯수가 배열의 수보다 작은 경우 null 값을 리턴한다.
    if (num > arr.length) {
        return null;
    }

		// 첫번째 n개 만큼의 합이 최대값으로 저장될 수 있도록 max변수를 -infinity로 설정
    let max = -infinity;

		// n개 만큼의 덧셈이 시작되는 범위의 첫 값이 될 수 있는 값의 index 범위
    for (let i=0; i < arr.length-n+1; i++) {
        temp = 0; // max 값과 비교할 수 있도록 하는 덧셈값 임시 보관 변수

				// 첫 index의 값으로 부터 n개 만큼 더해 temp에 저장
        for (let j=0; j < n; j++) {
            temp += arr[i+j];
        }

				// temp와 max 값을 비교하여 max 값을 최신화
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}
```

- 시간 복잡도 : `O(n^2)`

### 접근방법(슬라이딩 윈도우)

이해를 돕기 위해 사진을 참고해 설명하면,

위의 코드 풀이처럼 배열 내의 `n`개 만큼의 범위에 대해서 합을 따로 구해가며 비교하는 것이 아니라.

`arr[0]`~`arr[n]` 까지의 합을 구하는 식을 초기값으로 잡고 다음 합계는 `arr[0]`~`arr[n]`의 합에서 `arr[0]`을 빼고 `arr[n+1]`을 더하는 것이 다음 합계가 되는 것을 알고리즘으로 하여

이를 비교해내가며, 최대 값을 유지하는 식의 접근 방법이 슬라이딩 윈도우이다. 

![https://mblogthumb-phinf.pstatic.net/MjAyMDA5MTBfNDIg/MDAxNTk5NzE5OTc0NjE2.Z2Tap1I_27avJ6sbXJ4oPO5NwwT-7xLDa7zyVpysHAwg.oSW4PYJoz4guYwcjOdtY8Y8Yka5-cupPv5x3vSpZu8Mg.PNG.vkfkdto0209/image.png?type=w800](https://mblogthumb-phinf.pstatic.net/MjAyMDA5MTBfNDIg/MDAxNTk5NzE5OTc0NjE2.Z2Tap1I_27avJ6sbXJ4oPO5NwwT-7xLDa7zyVpysHAwg.oSW4PYJoz4guYwcjOdtY8Y8Yka5-cupPv5x3vSpZu8Mg.PNG.vkfkdto0209/image.png?type=w800)

[<사진 출처 : 블로그 's공부일지>](https://m.blog.naver.com/vkfkdto0209/222085728422)

```javascript
function maxSubArraySum(arr, n) {
    let maxSum = 0;
    let tempSum = 0;

    if(arr.length < num) return null;

		// arr[0] 부터 n개의 값의 합.
    for(let i=0; i<n; ++i) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

		// 이미 n개의 값은 더했으므로 추가하여 더해질 값의 범위인 n~arr.length를 반복문의 기준으로 잡음.
    for(let i=n; i<arr.length; ++i) {
				// tempSum: 임시 합계 저장 변수, arr[i-n] : 이전 tempSum 범위의 맨 앞의 값, arr[i] : 뒤에 추가하여 더해질 값 
        tempSum = tempSum - arr[i-n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}
```

- 시간 복잡도 : `O(n)`
// μ€ν ctrl + alt + n
function productOfArray(arr) {
  if(arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1))
}

productOfArray([1,2,3])

/*
π¬μμΆλ ₯ μ
1. `productOfArray([1,2,3]) // 6`
2. `productOfArray([1,2,3,10]) // 60`
*/
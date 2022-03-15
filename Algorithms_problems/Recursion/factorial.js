// 실행 ctrl + alt + n
function factorial(num) {
  if(num === 0) return 1;
  return num*factorial(num-1);
}

factorial(4)

/*
💬입출력 예
1. `factorial(1) // 1`
2. `factorial(2) // 2`
3. `factorial(4) // 24`
4. `factorial(7) // 5040`
*/
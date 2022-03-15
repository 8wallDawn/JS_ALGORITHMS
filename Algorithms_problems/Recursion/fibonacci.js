// 실행 ctrl + alt + n
function fib(num) {
  if(num <= 2) return 1;
  return fib(num-1) + fib(num-2);
}

/*
💬입출력 예
1. `fib(4) // 3` 0+1+1+2+3     
fib(4) => fib(3) + fib(2)
          => { fib(2) + fib(1) } + 1
              => 1 + 1 + 1 
2. `fib(5) // 0+1+1+2+3+5
fib(5) => fib(4) + fib(3)
          3        2
2. `fib(10) // 55`
3. `fib(28) // 317811`
4. `fib(35) // 9227465`
*/
// μ€ν ctrl + alt + n
function recursiveRange(num) {
  if(num === 0) return 0;
  return num+recursiveRange(num-1);
}

recursiveRange(6);
/*
π¬μμΆλ ₯ μ
1. `recursiveRange(6) // 21`
2. `recursiveRange(10) // 55`
*/
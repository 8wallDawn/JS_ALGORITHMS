// μ€ν ctrl + alt + n
function power(base, exponent) {
  if(exponent === 0) return 1;
  return base * power(base, exponent-1);
}

power(2,0);

/*
π¬μμΆλ ₯ μ
1. `power(2,0) // 1`
2. `power(2,2) // 4`
3. `power(2,4) // 16`
*/
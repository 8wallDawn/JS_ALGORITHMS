# Frequency Counter - areThereDuplicates
## ๐ง๋ฌธ์  ์ค๋ช
๋ณ๋ํ๋ ์ธ์๋ฅผ ๋ฐ์ ์ธ์๋ค ๋ด์์ ์ค๋ณตํ๋ ๊ฐ์ด ์กด์ฌํ๋ ๊ฒฝ์ฐ `true`๋ฅผ ๋ฐํํ๋ ํจ์ `areThereDuplicates()`๋ฅผ ์์ฑํ์์ค.
* ์๊ฐ ๋ณต์ก๋๋ `O(n)` ์ด๋ค.

### ๐ฌ์์ถ๋ ฅ ์
1. `areThereDuplicates(1,2,3) // false`
2. `areThereDuplicates(1,2,2) // true`
3. `areThereDuplicates('a', 'b', 'c', 'a') // true`

## ๐ฎ์์ฑ ์ฝ๋
```javascript
function areThereDuplicates() {
  let frequencyOfArguments = {};

  for(let val of arguments) {
    frequencyOfArguments[val] = (frequencyOfArguments[val] || 0) +1;
  }

  for(let key in frequencyOfArguments) {
    if(frequencyOfArguments[key] >= 2 ) return true;
  }
  return false;
}
```
์์ ์ฝ๋์์๋ ๋ค์๊ณผ ๊ฐ์ ์ค๋ฅ๊ฐ ๋ฐ์ํ๋ค...

_TypeError : undefined is not a function (evaluating 'arguments[Symbol.iterator()]')_

๊ฒ์์ ํด๋ดค์ง๋ง ์ ๋์ค์ง ์์ ๋น์ทํ ์๋ฌ๋ฅผ ์ต๋ํ ์ฐพ์๋ดค๋๋ฐ
**๋ฐฐ์ด์ ์ธ์๋ก ๊ฐ๊ฒ ๋์์ ๋ ๋ฐ์ํ๊ฒ๋๋ ์๋ฌ** ์ธ ๊ฒ ๊ฐ๋ค.
๊ทธ๋์ ์ธ์๋ฅผ ํธ๋ `spread` ๋ฅผ ์ฌ์ฉํ๋ค.


```javascript
function areThereDuplicates(...args) {
  let frequencyOfArguments = {};

  for(let val of args) {
    frequencyOfArguments[val] = (frequencyOfArguments[val] || 0) +1;
  }

  for(let key in frequencyOfArguments) {
    if(frequencyOfArguments[key] >= 2 ) return true;
  }
  return false;
}
```


### ๐ค์ ๊ทผ ๋ฐฉ๋ฒ
1. ์ธ์์ ๊ฐ์๋ ์ ๋์ ์ด๋ฏ๋ก `arguments`๋ฅผ ์ ๊ทน์ ์ผ๋ก ํ์ฉํ๋ค.
---
**arguments**

`arguments`๋ `Array` ํํ์ ๊ฐ์ฒด์ด๋ค.

---
2. `arguments` ์ ๊ฐ๋ค์ `key`๋ก ํ๊ณ  ๋น๋์๋ฅผ `value`๋ก ํ๋ ๊ฐ์ฒด๋ฅผ ์์ฑํ๋ค.
3. ๊ฐ์ฒด์ `value` ๊ฐ์ด 2์ด์์ด๋ฉด `true`๋ฅผ ๋ฐํํ๋ค.
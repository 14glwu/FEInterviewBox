// 暴力解法
function NumberOf1Between1AndN_Solution(n) {
  let ones = 0;
  for (let i = 0; i <= n; i++) {
    let num = i;
    while (num) {
      if (num % 10 === 1) {
        ones++;
      }
      num = ~~(num / 10);
    }
  }
  return ones;
}

// 优化版
function NumberOf1Between1AndN_Solution2(n) {
  if (n <= 0) return 0;
  let count = 0;
  for (let i = 1; i <= n; i *= 10) {
    const a = ~~(n / i),
      b = n % i;
    count = count + ~~((a + 8) / 10) * i + (a % 10 === 1) * (b + 1);
  }
  return count;
}

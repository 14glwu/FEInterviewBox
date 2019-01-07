// 第一种
function NumberOf1(n) {
  let count = 0,
    flag = 1;
  while (flag) {
    // 循环的次数等于整数二进制的位数，32位的整数需要循环32位
    if (flag & n) count++;
    flag = flag << 1;
  }
  return count;
}
// 第二种
function newNumberOf1(n) {
  let count = 0;
  while (n) {
    n = n & n - 1; // 核心
    count++;
  }
  return count;
}

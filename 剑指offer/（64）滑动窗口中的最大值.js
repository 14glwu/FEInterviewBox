function maxInWindows(num, size) {
  const res = [];
  if (size === 0) {
    return res;
  }
  let begin;
  const queue = [];
  for (let i = 0; i < num.length; i++) {
    begin = i - size + 1; // 代表滑动窗口的左边界
    if (queue.length === 0) {
      queue.push(i);
    } else if (begin > queue[0]) {
      queue.shift();
    }
    while (queue.length !== 0 && num[queue[queue.length - 1]] <= num[i]) {
      queue.pop();
    }
    queue.push(i);
    if (begin >= 0) {
      res.push(num[queue[0]]);
    }
  }
  return res;
}

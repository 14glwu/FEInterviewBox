// 第一种
function MoreThanHalfNum_Solution(numbers) {
  const left = 0,
    right = numbers.length - 1;
  let key = partition(numbers, left, right);
  const mid = numbers.length >> 1;
  while (key !== mid) {
    if (key > mid) {
      key = partition(numbers, left, key - 1);
    } else {
      key = partition(numbers, key + 1, right);
    }
  }
  let res = numbers[mid];
  if (!checkMoreThanHalf(numbers, res)) {
    res = 0;
  }
  return res;
}
function partition(a, left, right) {
  const key = a[left]; // 一开始让key为第一个数
  while (left < right) {
    // 扫描一遍
    while (key <= a[right] && left < right) {
      // 如果key小于a[right]，则right递减，继续比较
      right--;
    }
    [a[left], a[right]] = [a[right], a[left]]; // 交换
    while (key >= a[left] && left < right) {
      // 如果key大于a[left]，则left递增，继续比较
      left++;
    }
    [a[left], a[right]] = [a[right], a[left]]; // 交换
  }
  return left; // 把key现在所在的下标返回
}
function checkMoreThanHalf(numbers, num) {
  let times = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (num === numbers[i]) {
      times++;
    }
  }
  if (times * 2 <= numbers.length) {
    return false;
  }
  return true;
}

// 第二种
function MoreThanHalfNum_Solution2(numbers) {
  let res = numbers[0],
    times = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (times === 0) {
      res = numbers[i];
      times = 1;
    } else if (numbers[i] === res) {
      times++;
    } else {
      times--;
    }
  }
  if (!checkMoreThanHalf(numbers, res)) {
    res = 0;
  }
  return res;
}
function checkMoreThanHalf2(numbers, num) {
  let times = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (num === numbers[i]) {
      times++;
    }
  }
  if (times * 2 <= numbers.length) {
    return false;
  }
  return true;
}

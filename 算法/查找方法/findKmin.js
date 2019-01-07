function findKmin(a, k) {
  // 查找第K小的数
  const left = 0,
    right = a.length - 1;
  let key = partition(a, left, right);
  while (key !== k - 1) {
    if (key > k - 1) {
      key = partition(a, left, key - 1);
    } else {
      key = partition(a, key + 1, right);
    }
  }
  return a[key];
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
const arr = [5, 4, 3, 2, 1, 6];
const kmin = findKmin(arr, 2);
console.log(kmin);

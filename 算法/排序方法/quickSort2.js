// 改进版
function quickSort(a, left, right) {
  if (left === right) return;
  const key = partition(a, left, right); // 选出key下标
  if (left < key) {
    quickSort(a, left, key - 1); // 对key的左半部分排序
  }
  if (key < right) {
    quickSort(a, key + 1, right); // 对key的右半部份排序
  }
}
function partition(a, left, right) {
  const key = getKey(a, left, right); // 取得key
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
function getKey(a, left, right) {
  // 三值取中
  const mid = left + Math.floor((right - left) / 2);
  if (a[mid] > a[right]) [a[mid], a[right]] = [a[right], a[mid]]; // 交换
  if (a[left] > a[right]) [a[left], a[right]] = [a[right], a[left]]; // 交换
  if (a[mid] > a[left]) [a[left], a[right]] = [a[right], a[left]]; // 交换
  const key = a[left]; // 现在a[mid]<a[left]<a[right];
  return key;
}
const arr = [10, 9, 11, 13, 15, 7, 12, 8];
quickSort(arr, 0, 7);
console.log(arr);

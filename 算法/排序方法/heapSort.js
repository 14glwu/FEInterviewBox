/**
 * Created by lin on 2018/8/20.
 */
// 重新调整为大顶堆
function _heapify(arr, size, index) {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  if (left < size && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < size && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== index) {
    [arr[index], arr[largest]] = [arr[largest], arr[index]];
    _heapify(arr, size, largest);
  }
}

// 这里的堆排序用的是最大堆
function heapSort(arr) {
  const result = arr.slice(0);
  const size = arr.length;
  for (let i = Math.floor(size / 2 - 1); i >= 0; i--) {
    _heapify(result, size, i);
  }
  for (let i = size - 1; i >= 0; i--) {
    [result[0], result[i]] = [result[i], result[0]];
    _heapify(result, i, 0);
  }
  return result;
}

console.log(heapSort([4, 3, 2, 1, 5, 6, 7, 8]));

function FindNumbersWithSum(array, sum) {
  if (array.length < 2) return [];
  let left = 0,
    right = array.length - 1;
  const res = [];
  while (left < right) {
    if (array[left] + array[right] < sum) {
      left++;
    } else if (array[left] + array[right] > sum) {
      right--;
    } else {
      res.push(array[left], array[right]);
      break;
    }
  }
  return res;
}

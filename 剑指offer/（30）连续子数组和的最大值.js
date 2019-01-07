function FindGreatestSumOfSubArray(array) {
  if (array.length <= 0) return 0;
  let sum = array[0],
    max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (sum < 0) sum = array[i];
    else sum = sum + array[i];
    if (sum > max) max = sum;
  }
  return max;
}

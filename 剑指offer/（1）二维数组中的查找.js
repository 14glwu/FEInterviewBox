function Find(target, array) {
  // write code here
  const n = array.length,
    m = array[0].length;
  let row = n - 1,
    col = 0;
  if (m === 0 && n === 0) {
    return false;
  }
  while (row >= 0 && col <= m - 1) {
    if (array[row][col] > target) {
      row--;
    } else if (array[row][col] < target) {
      col++;
    } else return true;
  }
  return false;
}

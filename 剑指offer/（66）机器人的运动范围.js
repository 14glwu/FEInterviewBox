function movingCount(threshold, rows, cols) {
  const visited = [];
  for (let i = 0; i < rows; i++) {
    visited.push([]);
    for (let j = 0; j < cols; j++) {
      visited[i][j] = false;
    }
  }
  return move(0, 0, rows, cols, visited, threshold);
}
function move(i, j, rows, cols, visited, threshold) {
  if (i < 0 || i === rows || j < 0 || j === cols || visited[i][j]) {
    return 0;
  }
  let sum = 0;
  const tmp = `${i}${j}`;
  for (let k = 0; k < tmp.length; k++) {
    sum += tmp.charAt(k) / 1; // 转成数字
  }
  if (sum > threshold) {
    return 0;
  }
  visited[i][j] = true;
  return (
    1 +
    move(i + 1, j, rows, cols, visited, threshold) +
    move(i, j + 1, rows, cols, visited, threshold) +
    move(i - 1, j, rows, cols, visited, threshold) +
    move(i, j - 1, rows, cols, visited, threshold)
  );
}

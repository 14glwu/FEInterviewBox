function hasPath(matrix, rows, cols, path) {
  const pathLength = 0;
  const visited = new Array(rows * cols);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // 遍历，遍历的点为起点。
      if (hasPathCore(matrix, rows, cols, row, col, path, pathLength, visited)) {
        return true;
      }
    }
  }
  return false;
}
function hasPathCore(matrix, rows, cols, row, col, path, pathLength, visited) {
  let hasPath = false;
  if (pathLength === path.length) return true;
  if (
    row >= 0 &&
    row < rows &&
    col >= 0 &&
    col < cols &&
    matrix[row * cols + col] === path[pathLength] &&
    !visited[row * cols + col]
  ) {
    ++pathLength;
    visited[row * cols + col] = true;
    // 因为||为短路运算符，只要第一个满足就会返回，而不会去计算后面的，所以有些路径可以不用去走。
    hasPath =
      hasPathCore(matrix, rows, cols, row - 1, col, path, pathLength, visited) ||
      hasPathCore(matrix, rows, cols, row, col - 1, path, pathLength, visited) ||
      hasPathCore(matrix, rows, cols, row + 1, col, path, pathLength, visited) ||
      hasPathCore(matrix, rows, cols, row, col + 1, path, pathLength, visited);
    if (!hasPath) {
      --pathLength;
      visited[row * cols + col] = false;
    }
  }
  return hasPath;
}

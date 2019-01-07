// 第一种
function printMatrix(matrix) {
  if (matrix === null) return null;
  const rows = matrix.length,
    cols = matrix[0].length;
  let start = 0,
    res = [];
  while (rows > start * 2 && cols > start * 2) {
    res = res.concat(printMatrixInCircle(matrix, rows, cols, start));
    start++;
  }
  return res;
}
function printMatrixInCircle(matrix, rows, cols, start) {
  const endX = cols - 1 - start,
    endY = rows - 1 - start,
    res = [];
  for (let i = start; i <= endX; i++) {
    res.push(matrix[start][i]);
  }
  for (let i = start + 1; i <= endY; i++) {
    res.push(matrix[i][endX]);
  }
  for (let i = endX - 1; i >= start && endY > start; i--) {
    res.push(matrix[endY][i]);
  }
  for (let i = endY - 1; i >= start + 1 && endX > start; i--) {
    res.push(matrix[i][start]);
  }
  return res;
}

// 第二种
function printMatrix2(matrix) {
  if (!matrix) return;
  let res = [];
  const firstRow = matrix.shift();
  res = res.concat(firstRow);
  while (matrix.length) {
    // 判断数组是否为空一定要用matrix.length来判断
    matrix = rotateMatrix(matrix);
    res = res.concat(matrix.shift());
  }
  return res;
}
function rotateMatrix(matrix) {
  if (matrix[0].length === undefined) return matrix; // 数组为一维数组时，直接返回原数组
  const rows = matrix.length,
    cols = matrix[0].length,
    newMatrix = [];
  for (let j = cols - 1; j >= 0; j--) {
    const tempMatrix = [];
    for (let i = 0; i < rows; i++) {
      tempMatrix.push(matrix[i][j]);
    }
    newMatrix.push(tempMatrix);
  }
  return newMatrix;
}

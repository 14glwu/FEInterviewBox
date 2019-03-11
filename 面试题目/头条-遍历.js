/**
 * Created by lin on 2018/8/25.
 */
const M = 10,
  N = 10;
const matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
  [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
];
const isPass = [];
for (let i = 0; i < M; i++) {
  const tmp = [];
  for (let j = 0; j < N; j++) {
    tmp[j] = false;
  }
  isPass.push(tmp);
}
const res = [];
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    let count = 0;
    if (matrix[i][j] === 1 && isPass[i][j] === false) {
      count = traverse(matrix, isPass, i, j, count);
      res.push(count);
    }
  }
}
function traverse(matrix, isPass, x, y, count) {
  if (x < 0 || x >= M || y < 0 || y > M) {
    return 0;
  }
  if (matrix[x][y] === 1 && isPass[x][y] === false) {
    isPass[x][y] = true;
    count++;
  }
  if (y - 1 >= 0 && matrix[x][y - 1] === 1 && isPass[x][y - 1] === false) {
    // 1
    count = traverse(matrix, isPass, x, y - 1, count);
  }
  if (x - 1 >= 0 && matrix[x - 1][y] === 1 && isPass[x - 1][y] === false) {
    // 2
    count = traverse(matrix, isPass, x - 1, y, count);
  }
  if (x - 1 >= 0 && y - 1 >= 0 && matrix[x - 1][y - 1] === 1 && isPass[x - 1][y - 1] === false) {
    // 3
    count = traverse(matrix, isPass, x - 1, y - 1, count);
  }
  if (x - 1 >= 0 && y + 1 < N && matrix[x - 1][y + 1] === 1 && isPass[x - 1][y + 1] === false) {
    // 4
    count = traverse(matrix, isPass, x - 1, y + 1, count);
  }
  if (y + 1 < N && matrix[x][y + 1] === 1 && isPass[x][y + 1] === false) {
    // 5
    count = traverse(matrix, isPass, x, y + 1, count);
  }
  if (x + 1 < M && matrix[x + 1][y] === 1 && isPass[x + 1][y] === false) {
    // 6
    count = traverse(matrix, isPass, x + 1, y, count);
  }
  if (x + 1 < M && y + 1 < N && matrix[x + 1][y + 1] === 1 && isPass[x + 1][y + 1] === false) {
    // 7
    count = traverse(matrix, isPass, x + 1, y + 1, count);
  }
  if (x + 1 < M && y - 1 >= 0 && matrix[x + 1][y - 1] === 1 && isPass[x + 1][y - 1] === false) {
    // 8
    count = traverse(matrix, isPass, x + 1, y - 1, count);
  }
  return count;
}
console.log(`${res.length},${Math.max(...res)}`);

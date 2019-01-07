// 第一种
function multiply(array) {
  const C = [],
    D = [],
    n = array.length;
  C[0] = array[0];
  for (let i = 1; i < n; i++) {
    C[i] = array[i] * C[i - 1];
  }
  D[n - 1] = array[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    D[i] = array[i] * D[i + 1];
  }
  const B = [];
  B[0] = D[1];
  B[n - 1] = C[n - 2];
  for (let i = 1; i < n - 1; i++) {
    B[i] = C[i - 1] * D[i + 1];
  }
  return B;
}
// 第二种
function multiply2(array) {
  const B = [],
    len = array.length;
  B[0] = 1;
  // 计算前i - 1个元素的乘积
  for (let i = 1; i < len; i++) {
    B[i] = array[i - 1] * B[i - 1];
  }
  let tmp = 1;
  // 计算后N - i个元素的乘积并连接
  for (let i = len - 2; i >= 0; i--) {
    tmp *= array[i + 1];
    B[i] *= tmp;
  }
  return B;
}

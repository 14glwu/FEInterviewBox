// 第一种
function FindNumsAppearOnce(array) {
  const res = [];
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
      res.push(array[i]);
    }
  }
  return res;
}
// 第二种
function FindNumsAppearOnce2(array) {
  const map = {},
    res = [];
  for (let i = 0; i < array.length; i++) {
    if (!map[array[i]]) {
      map[array[i]] = 1;
    } else {
      map[array[i]]++;
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] === 1) {
      res.push(array[i]);
    }
  }
  return res;
}
// 第三种
function FindNumsAppearOnce3(array) {
  let tmp = array[0];
  for (let i = 1; i < array.length; i++) {
    tmp = tmp ^ array[i];
  }
  if (tmp === 0) return;
  let index = 0; // 记录第几位是1
  while ((tmp & 1) === 0) {
    tmp = tmp >> 1;
    index++;
  }
  let num1 = 0,
    num2 = 0;
  for (let i = 0; i < array.length; i++) {
    if (isOneAtIndex(array[i], index)) num1 = num1 ^ array[i];
    else num2 = num2 ^ array[i];
  }
  return [num1, num2];
}
function isOneAtIndex(num, index) {
  num = num >> index;
  return num & 1;
}

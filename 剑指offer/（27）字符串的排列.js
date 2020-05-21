// 回溯法
function Permutation(str) {
  let res = [];
  const pStr = '';
  if (str.length <= 0) return res;
  arr = str.split(''); // 将字符串转化为字符数组
  res = permutate(arr, pStr, res);
  return res;
}
function permutate(arr, pStr, res) {
  if (arr.length === 0) {
    return res.push(pStr);
  }
  const isRepeated = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (!isRepeated.has(arr[i])) {
      // 避免相同的字符交换
      const char = arr.splice(i, 1)[0];
      pStr += char;
      permutate(arr, pStr, res);
      arr.splice(i, 0, char); // 恢复字符串，回溯
      pStr = pStr.slice(0, pStr.length - 1); // 回溯
      isRepeated.add(char);
    }
  }

  return res;
}

// 递归全排列法
function Permutation2(str) {
  let res = [];
  if (str.length <= 0) return res;
  arr = str.split(''); // 将字符串转化为字符数组
  res = permutate2(arr, 0, res);
  res = [...new Set(res)]; // 去重
  res.sort(); // 排序
  return res;
}
function permutate2(arr, index, res) {
  if (arr.length === index) {
    return res.push(arr.join(''));
  }
  for (let i = index; i < arr.length; i++) {
    [arr[index], arr[i]] = [arr[i], arr[index]]; // 交换
    permutate2(arr, index + 1, res);
    [arr[index], arr[i]] = [arr[i], arr[index]]; // 交换
  }

  return res;
}

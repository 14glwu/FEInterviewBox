/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  let res = [];
  if (s.length <= 0) return res;
  arr = s.split(''); // 将字符串转化为字符数组
  res = permutate(arr, 0, res);
  res = [...new Set(res)]; // 去重
  res.sort(); // 排序
  return res;
};
function permutate(arr, index, res) {
  if (arr.length === index) {
    return res.push(arr.join(''));
  }
  for (let i = index; i < arr.length; i++) {
    [arr[index], arr[i]] = [arr[i], arr[index]]; // 交换
    permutate(arr, index + 1, res);
    [arr[index], arr[i]] = [arr[i], arr[index]]; // 交换
  }

  return res;
}

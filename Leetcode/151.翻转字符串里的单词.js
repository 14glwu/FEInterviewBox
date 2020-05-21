/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s
    .split(' ')
    .reverse()
    .filter((item) => item.length > 0)
    .join(' ');
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords2 = function(s) {
  let list = [],
    str = '',
    resStr = '';
  s += ' '; // 加个空格 防止最后一个不是空格的情况, 确保循环到最后能把最后一个加到数组中, 省得再在下面判断
  for (let i = 0; i < s.length; i++) {
    s[i] !== ' ' ? (str += s[i]) : str && (list.push(str), (str = ''));
  }
  for (let j = list.length - 1; j >= 0; j--) {
    resStr += j !== 0 ? list[j] + ' ' : list[j];
  }
  return resStr;
};

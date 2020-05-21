/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let res = '';
  let l = 0;
  for (let i = 0; i < s.length; i++) {
    if (res.includes(s[i])) {
      res = res.slice(res.indexOf(s[i]) + 1);
    }
    res += s[i];
    l = Math.max(res.length, l);
  }
  return l;
};

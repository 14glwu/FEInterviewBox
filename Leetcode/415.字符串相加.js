/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1;
  let carry = 0;
  let res = '';
  while (i >= 0 || j >= 0) {
    let x = i >= 0 ? +num1[i] : 0;
    let y = j >= 0 ? +num2[j] : 0;
    let sum = x + y + carry;
    carry = Math.floor(sum / 10);
    let val = sum % 10;
    res = val + res;
    if (i >= 0) i--;
    if (j >= 0) j--;
  }
  if (carry) {
    res = carry + res;
  }
  return res;
};

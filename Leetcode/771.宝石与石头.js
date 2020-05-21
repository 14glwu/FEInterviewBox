/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let num = 0;
  for (let i = 0; i < S.length; i++) {
    if (J.includes(S[i])) {
      num++;
    }
  }
  return num;
};

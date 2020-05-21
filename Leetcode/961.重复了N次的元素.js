/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  let mySet = new Set();
  for (let i = 0; i <= A.length / 2 + 1; i++) {
    if (mySet.has(A[i])) {
      return A[i];
    }
    mySet.add(A[i]);
  }
};

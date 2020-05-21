/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }
  let s1Map = {};
  for (let i = 0; i < s1.length; i++) {
    if (s1Map[s1[i]]) {
      s1Map[s1[i]]++;
    } else {
      s1Map[s1[i]] = 1;
    }
  }
  for (let i = 0; i <= s2.length - s1.length; i++) {
    let s2Map = {};
    for (let j = 0; j < s1.length; j++) {
      if (s2Map[s2[i + j]]) {
        s2Map[s2[i + j]]++;
      } else {
        s2Map[s2[i + j]] = 1;
      }
    }
    if (mapEqual(s1Map, s2Map)) {
      return true;
    }
  }
  return false;
};
function mapEqual(m1, m2) {
  for (let i in m1) {
    if (m1[i] !== m2[i]) {
      return false;
    }
  }
  return true;
}

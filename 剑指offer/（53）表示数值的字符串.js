// 第一种
function isNumeric(s) {
  return s.match(/[+-]?\d*(\.\d*)?([eE][+-]?\d+)?/g)[0] === s;
}
// 第二种
function isNumeric2(s) {
  return s.search(/^[+-]?\d*(\.\d*)?$/) === 0 || s.search(/^[+-]?\d+(\.\d*)?[Ee]{1}[+-]?\d+$/) === 0;
}

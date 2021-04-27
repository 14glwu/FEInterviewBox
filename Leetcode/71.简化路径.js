/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const stack = [];
  const pathArr = path.split('/');
  for (let item of pathArr) {
    if (item === '' || item === '.') {
      continue;
    } else if (item === '..') {
      stack.pop();
    } else {
      stack.push(item);
    }
  }
  return '/' + stack.join('/');
};

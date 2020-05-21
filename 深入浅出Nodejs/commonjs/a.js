// a.js
let count = 1;
function setCount() {
  count += 1;
}
setTimeout(() => {
  console.log('a', count);
});

module.exports = {
  count,
  setCount
};

// 因为exports = module.exports
// 所以下面这样是不行的
// exports = { // 错误，会改变引用
//   count,
//   setCount
// };
// 而下面这样是可以的
// exports.count = count;
// exports.setCount = setCount;

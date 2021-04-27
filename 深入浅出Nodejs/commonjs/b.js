const obj = require('./a');
obj.setCount();
console.log('b', obj.a.count);
setTimeout(() => {
  console.log('b.next', obj.a.count);
}, 1000);

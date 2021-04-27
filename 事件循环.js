console.log(1);
setTimeout(function() {
  console.log('setTimeout1');
  new Promise(function(resolve) {
    console.log('setTimeout1 promise1');
    resolve();
  }).then(() => {
    console.log('setTimeout1 promise1 end');
  });
  console.log(3);
}, 0);
setTimeout(function() {
  console.log('setTimeout2');
  new Promise(function(resolve) {
    console.log('setTimeout2 promise1');
    resolve();
  }).then(() => {
    console.log('setTimeout2 promise1 end');
  });
}, 0);
console.log(2);
new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(() => {
  console.log('promise1 end');
});

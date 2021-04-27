import { count, setCount } from './a1.mjs';
setCount();
console.log('b', count);
setTimeout(() => {
  console.log('b.next', count);
}, 0);

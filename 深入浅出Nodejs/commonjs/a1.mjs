// a1.js
export let count = 1;
export function setCount() {
  count += 1;
}
setTimeout(() => {
  console.log('a', count);
});

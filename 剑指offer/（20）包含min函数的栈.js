const stack = [],
  minStack = [];
let tmp = null;
function push(node) {
  if (tmp !== null) {
    if (tmp > node) {
      tmp = node;
    }
    stack.push(node);
    minStack.push(tmp);
  } else {
    tmp = node;
    stack.push(node);
    minStack.push(tmp);
  }
}
function pop() {
  stack.pop();
  minStack.pop();
}
function top() {
  return stack[stack.length - 1];
}
function min() {
  return minStack[minStack.length - 1];
}

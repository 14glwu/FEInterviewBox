// 第一种
function IsPopOrder(pushV, popV) {
  // write code here
  const helpStack = [];
  let flag = false;
  while (pushV.length || helpStack.length) {
    while (helpStack[helpStack.length - 1] === popV[0] && helpStack.length) {
      helpStack.pop();
      popV.shift();
    }
    if (!popV.length) {
      flag = true;
    }
    if (!pushV.length) {
      break;
    }
    helpStack.push(pushV.shift());
  }
  return flag;
}
// 第二种
function IsPopOrder2(pushV, popV) {
  // write code here
  const helpStack = [];
  helpStack.push(pushV.shift());
  while (helpStack.length) {
    const x = helpStack.pop(),
      y = popV.shift();
    if (x !== y) {
      helpStack.push(x);
      popV.unshift(y);
      if (!pushV.length) {
        return false;
      }
      if (pushV.length) {
        helpStack.push(pushV.shift());
      }
    }
  }
  return true;
}

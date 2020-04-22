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

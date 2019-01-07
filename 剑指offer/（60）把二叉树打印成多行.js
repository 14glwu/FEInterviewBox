function Print(pRoot) {
  const queue = [],
    res = [];
  if (pRoot === null) {
    return res;
  }
  queue.push(pRoot);
  let nextLevel = 0; // 下一层节点个数
  let toBePrinted = 1; // 这一层还有多少个节点要打印
  let list = []; // 存放每一层节点
  while (queue.length) {
    const pNode = queue.shift();
    list.push(pNode.val);
    if (pNode.left !== null) {
      queue.push(pNode.left);
      nextLevel++;
    }
    if (pNode.right !== null) {
      queue.push(pNode.right);
      nextLevel++;
    }
    toBePrinted--;
    if (toBePrinted === 0) {
      res.push(list);
      list = [];
      toBePrinted = nextLevel;
      nextLevel = 0;
    }
  }
  return res;
}

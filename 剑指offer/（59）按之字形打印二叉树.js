function Print(pRoot) {
  const lists = [];

  if (pRoot === null) {
    return lists;
  }

  const stack1 = [];
  const stack2 = [];

  stack2.push(pRoot);
  let i = 1;
  while (stack1.length !== 0 || stack2.length !== 0) {
    const list = [];

    // 为奇数层
    if ((i & 1) === 1) {
      while (stack2.length !== 0) {
        const tmp = stack2[stack2.length - 1];
        stack2.pop();
        list.push(tmp.val);
        if (tmp.left !== null) stack1.push(tmp.left);
        if (tmp.right !== null) stack1.push(tmp.right);
      }
    }
    // 为偶数层
    else {
      while (stack1.length !== 0) {
        const tmp = stack1[stack1.length - 1];
        stack1.pop();
        list.push(tmp.val);
        if (tmp.right !== null) stack2.push(tmp.right);
        if (tmp.left !== null) stack2.push(tmp.left);
      }
    }
    ++i;
    lists.push(list);
  }
  return lists;
}

/* function TreeNode(x) {
 this.val = x;
 this.left = null;
 this.right = null;
 } */
function PrintFromTopToBottom(root) {
  const queue = [],
    res = [];
  if (root === null) {
    return res;
  }
  queue.push(root);
  while (queue.length) {
    const pRoot = queue.shift();
    if (pRoot.left !== null) {
      queue.push(pRoot.left);
    }
    if (pRoot.right !== null) {
      queue.push(pRoot.right);
    }
    res.push(pRoot.val);
  }
  return res;
}

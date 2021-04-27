/* function TreeNode(x) {
 this.val = x;
 this.left = null;
 this.right = null;
 } */
function reConstructBinaryTree(pre, vin) {
  // write code here
  if (pre.length === 0 || vin.length === 0) {
    return null;
  }
  // 前序第一个是根节点，也是中序左右子树的分割点
  const index = vin.indexOf(pre[0]),
    left = vin.slice(0, index),
    right = vin.slice(index + 1);
  return {
    val: pre[0],
    // 递归左右子树的前序、中序
    left: reConstructBinaryTree(pre.slice(1, index + 1), left),
    right: reConstructBinaryTree(pre.slice(index + 1), right)
  };
}

function reConstructBinaryTree2(pre, vin) {
  // write code here
  if (pre.length === 0 || vin.length === 0) {
    return null;
  }
  // 前序第一个是根节点，也是中序左右子树的分割点
  const index = vin.indexOf(pre[0]),
    left = vin.slice(0, index),
    right = vin.slice(index + 1);
  return {
    val: pre[0],
    // 递归左右子树的前序、中序
    left: reConstructBinaryTree(pre.slice(1, left.length + 1), left),
    right: reConstructBinaryTree(pre.slice(-right.length), right)
  };
}

/* function TreeNode(x) {
 this.val = x;
 this.left = null;
 this.right = null;
 } */
function HasSubtree(pRoot1, pRoot2) {
  let res = false;
  if (pRoot1 === null || pRoot2 === null) return false;
  if (pRoot1.val === pRoot2.val) res = doesTree1HasTree2(pRoot1, pRoot2);
  if (!res) res = HasSubtree(pRoot1.left, pRoot2);
  if (!res) res = HasSubtree(pRoot1.right, pRoot2);
  return res;
}
function doesTree1HasTree2(pRoot1, pRoot2) {
  if (pRoot2 === null) return true;
  if (pRoot1 === null) return false;
  if (pRoot1.val !== pRoot2.val) return false;
  return doesTree1HasTree2(pRoot1.left, pRoot2.left) && doesTree1HasTree2(pRoot1.right, pRoot2.right);
}

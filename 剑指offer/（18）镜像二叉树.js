/* function TreeNode(x) {
 this.val = x;
 this.left = null;
 this.right = null;
 } */
function Mirror(root) {
  if (root === null) return;
  Mirror(root.left);
  Mirror(root.right);
  [root.left, root.right] = [root.right, root.left];
  return root;
}

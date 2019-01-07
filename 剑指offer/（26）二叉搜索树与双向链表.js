/* function TreeNode(x) {
 this.val = x;
 this.left = null;
 this.right = null;
 } */
function Convert(pRootOfTree) {
  // write code here
  if (pRootOfTree === null) return null;
  let pLast = null;
  pLast = ConvertNode(pRootOfTree, pLast);
  let pHead = pLast;
  while (pHead && pHead.left) {
    pHead = pHead.left;
  }
  return pHead;
}
function ConvertNode(pNode, pLast) {
  if (pNode === null) return;
  if (pNode.left) {
    pLast = ConvertNode(pNode.left, pLast);
  }
  pNode.left = pLast;
  if (pLast) {
    pLast.right = pNode;
  }
  pLast = pNode;
  if (pNode.right) {
    pLast = ConvertNode(pNode.right, pLast);
  }
  return pLast;
}

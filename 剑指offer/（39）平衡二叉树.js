function IsBalancedSolution(pRoot) {
  return TreeDepth(pRoot) !== -1;
}
function TreeDepth(pRoot) {
  if (pRoot === null) return 0;
  const leftLen = TreeDepth(pRoot.left);
  if (leftLen === -1) return -1;
  const rightLen = TreeDepth(pRoot.right);
  if (rightLen === -1) return -1;
  return Math.abs(leftLen - rightLen) > 1 ? -1 : Math.max(leftLen, rightLen) + 1;
}

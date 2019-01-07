function TreeDepth(pRoot) {
  if (pRoot === null) return 0;
  const leftDep = TreeDepth(pRoot.left);
  const rightDep = TreeDepth(pRoot.right);
  return Math.max(leftDep, rightDep) + 1;
}

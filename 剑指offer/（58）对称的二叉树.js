function isSymmetrical(pRoot) {
  if (pRoot === null) {
    return true;
  }
  return compareRoot(pRoot.left, pRoot.right);
}
function compareRoot(left, right) {
  if (left === null) {
    return right === null;
  }
  if (right === null) {
    return false;
  }
  if (left.val !== right.val) {
    return false;
  }
  return compareRoot(left.left, right.right) && compareRoot(left.right, right.left);
}

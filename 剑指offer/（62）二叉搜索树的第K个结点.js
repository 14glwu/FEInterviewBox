function KthNode(pRoot, k) {
  if (pRoot === null || k === 0) {
    return null;
  }
  // 为了能追踪k，应该把KthNodeCore函数定义在这里面，k应该在KthNodeCore函数外面
  function KthNodeCore(pRoot) {
    let target = null;
    if (pRoot.left !== null) {
      target = KthNodeCore(pRoot.left, k);
    }
    if (target === null) {
      if (k === 1) {
        target = pRoot;
      }
      k--;
    }
    if (target === null && pRoot.right !== null) {
      target = KthNodeCore(pRoot.right, k);
    }
    return target;
  }
  return KthNodeCore(pRoot);
}

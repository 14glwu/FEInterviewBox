function GetNext(pNode) {
  if (pNode === null) {
    return null;
  }
  if (pNode.right !== null) {
    // 第1种
    pNode = pNode.right;
    while (pNode.left !== null) {
      pNode = pNode.left;
    }
    return pNode;
  }
  while (pNode.next !== null) {
    // 第2种
    if (pNode === pNode.next.left) {
      return pNode.next;
    }
    pNode = pNode.next;
  }
  return null;
}

// 第一种
function RandomListNode(x) {
  this.label = x;
  this.next = null;
  this.random = null;
}
function Clone(pHead) {
  // write code here
  if (pHead === null) {
    return null;
  }
  const map = new Map();
  let p, p2;
  p = pHead;
  p2 = new RandomListNode(pHead.label);
  const pHead2 = p2;
  map.set(p, p2);
  while (p) {
    if (p.next) p2.next = new RandomListNode(p.next.label);
    else p2.next = null;
    p = p.next;
    p2 = p2.next;
    map.set(p, p2);
  }
  p = pHead;
  p2 = pHead2;
  while (p !== null) {
    p2.random = map.get(p.random);
    p = p.next;
    p2 = p2.next;
  }
  return pHead2;
}

// 第二种
/* function RandomListNode(x){
 this.label = x;
 this.next = null;
 this.random = null;
 }*/
function Clone2(pHead) {
  cloneNodes(pHead);
  connectRandom(pHead);
  return reconnectNodes(pHead);
}
function cloneNodes(pHead) {
  // 复制链表
  let pNode = pHead;
  while (pNode !== null) {
    const newNode = new RandomListNode(pNode.label);
    newNode.next = pNode.next;
    pNode.next = newNode;
    pNode = newNode.next;
  }
}
function connectRandom(pHead) {
  // 设置random指针
  let pNode = pHead;
  while (pNode !== null) {
    if (pNode.random !== null) {
      pNode.next.random = pNode.random.next;
    }
    pNode = pNode.next.next;
  }
}
function reconnectNodes(pHead) {
  // 拆开链表
  let pNode = pHead;
  let newNodeHead = null,
    newNode = null;
  if (pNode !== null) {
    newNodeHead = newNode = pNode.next;
    pNode.next = newNode.next;
    pNode = newNode.next;
  }
  while (pNode !== null) {
    newNode.next = pNode.next;
    newNode = newNode.next;
    pNode.next = newNode.next;
    pNode = pNode.next;
  }
  return newNodeHead;
}

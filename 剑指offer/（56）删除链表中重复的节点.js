function ListNode(x) {
  this.val = x;
  this.next = null;
}
function deleteDuplication(pHead) {
  if (pHead === null || pHead.next === null) {
    return pHead;
  }
  const Head = new ListNode(0); // 重要，方便处理第一个、第二个节点就是相同的情况。
  Head.next = pHead;
  let pre = Head;
  let cur = Head.next;
  while (cur !== null) {
    if (cur.next !== null && cur.val === cur.next.val) {
      // 找到最后的一个相同节点,因为相同节点可能重复多个
      while (cur.next !== null && cur.val === cur.next.val) {
        cur = cur.next;
      }
      pre.next = cur.next;
      cur = cur.next;
    } else {
      pre = pre.next;
      cur = cur.next;
    }
  }
  return Head.next;
}

// 测试
const one = new ListNode(1);
const two = new ListNode(2);
const thr1 = new ListNode(3);
const thr2 = new ListNode(3);
const fou1 = new ListNode(4);
const fou2 = new ListNode(4);
const fiv = new ListNode(5);
fou2.next = fiv;
fou1.next = fou2;
thr2.next = fou1;
thr1.next = thr2;
two.next = thr1;
one.next = two;
console.log(deleteDuplication(one));

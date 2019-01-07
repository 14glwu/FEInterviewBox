/* function ListNode(x){
 this.val = x;
 this.next = null;
 }*/
function EntryNodeOfLoop(pHead) {
  let fast = pHead;
  let slow = pHead;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      // 两者相遇
      let p = pHead;
      while (p !== slow) {
        p = p.next;
        slow = slow.next;
      }
      return p;
    }
  }
  return null;
}

/* function ListNode(x){
 this.val = x;
 this.next = null;
 }*/
function FindKthToTail(head, k) {
  if (head === null || k <= 0) return null;
  let pNode1 = head,
    pNode2 = head;
  while (--k) {
    if (pNode2.next !== null) {
      pNode2 = pNode2.next;
    } else {
      return null;
    }
  }
  while (pNode2.next !== null) {
    pNode1 = pNode1.next;
    pNode2 = pNode2.next;
  }
  return pNode1;
}

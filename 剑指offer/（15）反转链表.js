/* function ListNode(x){
 this.val = x;
 this.next = null;
 }*/
function ReverseList(pHead) {
  // write code here
  let pPre = null,
    pNext = null;
  while (pHead !== null) {
    pNext = pHead.next;
    pHead.next = pPre;
    pPre = pHead;
    pHead = pNext;
  }
  return pPre;
}

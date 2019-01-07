/* function ListNode(x){
 this.val = x;
 this.next = null;
 }*/
function Merge(pHead1, pHead2) {
  let pMergeHead = null;
  // write code here
  if (pHead1 === null) return pHead2;
  if (pHead2 === null) return pHead1;
  if (pHead1.val < pHead2.val) {
    pMergeHead = pHead1;
    pMergeHead.next = Merge(pHead1.next, pHead2);
  } else {
    pMergeHead = pHead2;
    pMergeHead.next = Merge(pHead1, pHead2.next);
  }
  return pMergeHead;
}

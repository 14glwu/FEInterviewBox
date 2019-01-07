/* function ListNode(x){
 this.val = x;
 this.next = null;
 }*/
function printListFromTailToHead(head) {
  // write code here
  const res = [];
  let pNode = head;
  while (pNode !== null) {
    res.unshift(pNode.val);
    pNode = pNode.next;
  }
  return res;
}

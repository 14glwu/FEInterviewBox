/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let HEAD = new ListNode(0);
  let cur = HEAD;
  let p = l1,
    q = l2;
  let carry = 0;
  while (q !== null || p !== null) {
    let x = q === null ? 0 : q.val;
    let y = p === null ? 0 : p.val;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    let val = sum % 10;
    cur.next = new ListNode(val);
    cur = cur.next;
    if (q !== null) {
      q = q.next;
    }
    if (p !== null) {
      p = p.next;
    }
  }
  if (carry) {
    cur.next = new ListNode(carry);
  }
  return HEAD.next;
};

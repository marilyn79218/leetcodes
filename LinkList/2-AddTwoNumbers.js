// 2. Add Two Numbers
/*
  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  Output: 7 -> 0 -> 8
  Explanation: 342 + 465 = 807.
*/

var addTwoNumbers = function(l1, l2) {
  let point1 = l1;
  let point2 = l2;
  
  let addition = false;
  let sum = new ListNode(0);
  let sumHead = sum;
  while(point1 !== null || point2 !== null) {
    if (point1 === null) point1 = new ListNode(0);
    if (point2 === null) point2 = new ListNode(0);
    
    let nextDigit = point1.val + point2.val;
    if (addition) ++nextDigit;
    addition = false;
    
    if (nextDigit > 9) {
      addition = true;
      nextDigit = nextDigit % 10;
    }
    sum.next = new ListNode(nextDigit);
    sum = sum.next;
    
    point1 = point1.next;
    point2 = point2.next;
  }
  if (addition) sum.next = new ListNode(1);
  
  return sumHead.next;
}

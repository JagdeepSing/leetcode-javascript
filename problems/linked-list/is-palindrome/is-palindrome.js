function isPalindrome(head) {
  if (!head || !head.next) {
    return true;
  }

  const stack = [];
  let point = head;
  let length = 0;

  while (point) {
    length++;
    stack.push(point.val);
    point = point.next;
  }

  point = head;
  for (let i = 0; i < Math.floor(length/2); i++) {
    if (stack.pop() !== point.val) {
      return false;
    }
    point = point.next;
  }

  return true;
}

// class Node {
//   constructor(val, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }
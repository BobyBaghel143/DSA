function MiddleNode(head) {
  if (head == null) return null;
  let slow = head;                                      // start from head
  let fast = head;                                      // start from head
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;                                   // speed of heir
    fast = fast.next.next;                              // speed of rabbit
  }
  if (fast.next == null) {
    return slow;
  } else {
    return slow.next;
  }
}

let head = [1, 2, 3, 4, 5, 6];
x = MiddleNode(head);
console.log(x);

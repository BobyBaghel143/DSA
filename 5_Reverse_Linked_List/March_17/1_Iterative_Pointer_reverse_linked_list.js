function reverseList(head) {
  if (head == null) {       // empty list
    return head;
  }
  let prev = null;
  let curr = head;
  let nextAdjacent = curr.next;
  while (curr != null) {
    curr.next = prev;
    prev = curr;
    curr = nextAdjacent;
    if (curr != null) {
      nextAdjacent = curr.next;
    }
  }
  head = prev;
  return head;
}

let head = [1, 2, 3, 4, 5];
x = reverseList(head);
console.log(x);

/**
 * Time  ->  O(N)
 * Space -> O(1)
 */

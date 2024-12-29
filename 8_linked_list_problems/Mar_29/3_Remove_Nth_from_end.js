function RemoveNthFromEnd(head, n) {
  if (head == null) return head;
  if (head.next == null && n == 1) return null;
  let lo = head;
  let hi = head;
  let count = 1;
  let n_plus_1 = n + 1;
  while (count < n_plus_1 && hi != null) {
    hi = hi.next;
    count++;
  }
  if (hi == null) {
    let newHead = head.next;
    head.next = null;
    return newHead;
  }
  while (hi.next != null) {
    hi = hi.next;
    lo = lo.next;
  }

  // lo ->  (n+1)th node from last.
  let nextOfToBeRemoved = lo.next.next;
  let ToBeRemoved = lo.next;
  lo.next = nextOfToBeRemoved;
  ToBeRemoved.next = null;
  return head;
}

let head = [1, 2, 3, 4, 5];
n = 2;
console.log(RemoveNthFromEnd(head, n));

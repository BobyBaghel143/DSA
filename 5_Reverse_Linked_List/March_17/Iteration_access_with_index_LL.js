function reverseList(head) {
  let temp = head;
  let start = 0;
  let i = 0;
  let idx = 4;
  while (i < idx) {
    temp = temp.next;
    let t = start.data;
    start.data = temp.data;
    temp.data = t;
    i++;
  }
  return head;
}

let head = [1, 2, 3, 4, 5];
x = reverseList(head);
console.log(x);

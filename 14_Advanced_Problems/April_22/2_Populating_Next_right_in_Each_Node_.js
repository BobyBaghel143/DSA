let leftmost;
let head;

function process(child) {
  if (child == null) return;
  if (head == null) {
    head = child;
    leftmost = child;
  } else {
    head.next = child;
    head = child;
  }
}

function connect(root) {
  leftmost = root;
  head = null;
  let curr = null;
  while (leftmost != null) {
    curr = leftmost;
    head = null;
    leftmost = null;
    while (curr != null) {
      process(curr.left);
      process(curr.right);
      curr = curr.next;
    }
  }
  return root;
}

let root = [1, 2, 3, 4, 5, null, 7];
console.log(connect(root));

function createNode(value) {
  return {
    data: value,
    next: null,
    // prev: null
  };
}

function display(head) {
  let temp = head;
  let result = "";
  while (temp != null) {
    result += temp.data + " -> ";
    temp = temp.next;
  }
  result += "X";
  console.log(result);
}

//addAtHead
function addAtHead(head, data) {
  let newNode = createNode(data);
  newNode.next = head;
  head = newNode;
  return head;
}

//  circularing
function addAtCircular(head, data) {
  if (head == null) {
    return addAtHead(head, data);
  }
  let temp = head;
  while (temp.next != null) {
    temp = temp.next;
  }
  let tail = temp.next;
  tail.next = head;
  // head.next=temp;
  head.prev = tail;
  return head;
}

let head = null;

head = addAtHead(head, 10);
head = addAtHead(head, 20);
head = addAtHead(head, 30);
head = addAtHead(head, 40);
head = addAtHead(head, 50);
display(head);

// head=addAtCircular(head);
// display(head);

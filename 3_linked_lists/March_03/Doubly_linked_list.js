function createNode(value) {
  return {
    data: value,
    next: null,
    prev: null,
  };
}

function display(head) {
  let temp = head;
  let result = " X <->";
  while (temp != null) {
    result += temp.data + " <-> ";
    temp = temp.next;                   // jump 1 node to 2 node
  }
  result += "X";
  console.log(result);
}

// addAtHead
function addAtHead(head, data) {
  if (head == null) {                    // dll is empty
    return createNode(data);
  }
  let newNode = createNode(data);        // newNode
  newNode.next = head;                   // newNode connection to head
  head.prev = newNode;                   // head connection to newNode
  head = newNode;                        // update the head
  return head;
}

// addAtTail
function addAtTail(head, data) {
  if (head == null) {                    // sll is empty
    return addAtHead(head, data);
  }

  let temp = head;
  while (temp.next != null) {
    temp = temp.next;
  }

  let newNode = createNode(data);         // newNode
  temp.next = newNode;                    // Tail connect/ attach to newNode
  newNode.prev = temp;                    // newNode connect/ attach to Tail
  return head;
}

// removeAtHead
function removeAtHead(head) {
  if (head == null) return null;          // dll is empty
  if (head.next == null) return null;     // Single node in doubley linked list

  let nextNode = head.next;               // Second node
  head.next = null;                       // breake the connection head to  second node
  nextNode.prev = null;                   // breake the connection second node to head
  head = nextNode;                        // update head  (second node)
  return head;
}

// removeAtTail
function removeAtTail(head) {
  if (head == null) return null;           // dll is empty
  if (head.next == null) return null;      // Single node in dll

  let temp = head;
  while (temp.next.next != null) {
    temp = temp.next;
  }

  let tail = temp.next;                    // Exes second last node
  tail.prev = null;                        // breake the connection last to second last
  temp.next = null;                        // breake the connection second last to last
  return head;
}

// addAt || insert At mid
function addAt(head, i, data) {
  if (head == null) {
    return addAtHead(head, data);
  }
  let temp = head;
  let count = 0;
  while (count < i - 1) {
    temp = temp.next;
    count++;
  }
  let prevI = temp.next;

  let newNode = createNode(data);
  temp.next = newNode;
  newNode.prev = temp;
  newNode.next = prevI;
  prevI.prev = newNode;
  return head;
}

// removeAt || delete At mid
function removeAt(head, i) {
  if (head == null) {
    return head;
  }
  if (head.next == null) {
    return null;
  }

  let temp = head;
  let count = 0;
  while (temp.next != null && count < i - 1) {
    temp = temp.next;
    count++;
  }
  if (temp.next == null && count <= i - 1) {
    return head;
  }

  let nodeToBeRemoved = temp.next;
  let nextOfRemoved = temp.next.next;
  nodeToBeRemoved.next = null;
  nextOfRemoved.prev = null;
  nodeToBeRemoved = null;
  temp.next = nextOfRemoved;
  nextOfRemoved = temp;
  return head;
}

let head = null;

head = addAtHead(head, 10);
head = addAtHead(head, 20);
head = addAtHead(head, 30);
head = addAtHead(head, 40);
head = addAtHead(head, 50);
display(head);

head = addAtTail(head, 100);
display(head);

head = removeAtHead(head);
display(head);

head = removeAtTail(head);
display(head);

head = addAt(head, 2, 25);
display(head);

head = removeAt(head, 2);
display(head);

function createNode(value) {
    return {
        data: value,
        next: null
    }
}

function display(head) {
    let temp = head;
    let result = "";
    while (temp != null) {
        // console.log(temp.data);
        result += temp.data + " -> "
        temp = temp.next;
    }
    result +=  "X";
    console.log(result);
}

     // addAtHead  ||   Insert at Head
function addAtHead(head, data) {
    let newNode = createNode(data);  // This create a newNode with data.
    newNode.next = head;             // This step attaches the newNode to the head of the list.
    head = newNode;                  // This step updates the head of the list.
    return head;
}


    // addAtTail  ||  Insert at Tail
function addAtTail(head, data) {
    if (head == null) {              // When linked list is empty
        return addAtHead(head, data);
    }

    let temp = head;                  // Get access to the Tail node
    while (temp.next != null) {
        temp = temp.next;
    }

    let newNode = createNode(data);   // temp variable has access to the Tail node
    temp.next = newNode;
    return head;
}


     // removeAtHead  ||  delete at Head
function removeAtHead(head) {
    if (head == null) {
        return addAtHead(head, data);
    }

    let newNode = head.next;           // second node of the list
    head.next = null;                  // remove the linked of the old head

    return newNode;
}


    //  removeAtTail  || delete at Tail
function removeAtTail(head) {
    if (head == null) {
        return null;                  // linked list is empty.
    }
    if (head.next == null) {
        return null;                  // Only a single node which head and Tail both
    }

    let temp = head;
    while (temp.next.next != null) {
        temp = temp.next;
    }

    temp.next = null;                // temp variable has access to the second last node
    return head;
}


    // addAt  ||  add At Mid
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
    temp.next = newNode;                // connect nextNode to newNode
    newNode.next = prevI;               // connect newNode to prevNode
    return head;
}



     // removeAt  ||  delete At Mid
function removeAt(head, i) { 
    if (head == null) {               // linked list is empty
        return head;            
    }
    if (head.next == null) {          // single Node in linked list
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
    temp.next = nextOfRemoved;
    nodeToBeRemoved.next = null
    return head;
}


let head = null;                      // When the linked list is empty head is null

head = addAtHead(head, 10);
head = addAtHead(head, 20);
head = addAtHead(head, 30);
head = addAtHead(head, 40);
head = addAtHead(head, 50);
display(head);

head = addAtTail(head, 100);
// head = addAtTail(head, 200);
display(head);

head = removeAtHead(head);
display(head);

head = removeAtTail(head);
display(head);

head = addAt(head, 2, 25);
display(head);

head = removeAt(head, 2);
display(head);

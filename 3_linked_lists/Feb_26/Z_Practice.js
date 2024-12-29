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
        result = result + temp.data + " -> "
        temp = temp.next;
    }
    result = result + "X"
    console.log(result);
}

function addAthead(head, data) {
    let newNode = createNode(data);
    newNode.next = head;
    head = newNode;
    return head;
}

let head = null;

head = addAthead(head, 10);
head = addAthead(head, 20);
head = addAthead(head, 30);
head = addAthead(head, 40);
head = addAthead(head, 50);
display(head);
// console.log(head);
function f(curr) {      // reverse the linked list startly from curr node
    // base case
    if (curr.next == null) { return curr };
    let newHead = f(curr.next); // that go and reverse everthing from curr.next;
    curr.next.next = curr;
    curr.next = null;
    return newHead;
}

var reverseList = function (head) {
    if (head == null) { return null };
    head = f(head);
    return head;
}

let head = [1, 2, 3, 4, 5];
x = reverseList(head);
console.log(x);
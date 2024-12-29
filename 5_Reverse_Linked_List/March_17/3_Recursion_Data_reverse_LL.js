start = null;
function f(curr) {      // reverse a linked list by data and returns true where linked list is reversed.
    if (curr == null) {
        return false;
    }
    let result = f(curr.next)
    if (result == false) {
        let t = start.val;
        start.val = curr.val;
        curr.val = t;

        let response = (start == curr) || (start.next == curr)
        start = start.next;
        return response;
    }
    else {
        return result;
    }
}
function reverseList(head) {
    start = head;
    f(head);
    return head;
}

let head = [1, 2, 3, 4, 5];
x = reverseList(head);
console.log(head);

/**
 * Time -> O(N)
 * Space -> O(N)
 */
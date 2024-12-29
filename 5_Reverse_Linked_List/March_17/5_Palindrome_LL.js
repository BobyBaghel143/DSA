start = null;
function f(curr) {
    if (curr == null) { return true }
    let res = f(curr.next)
    if (res == false) { return res }
    if (start.val == curr.val) {
        start = start.next;
        return true
    }
    else {
        return false;
    }
}

var isPalindrome = function (head) {
    start = head;
    return f(head);
}

let head = [1, 2, 2, 1];
// let head = [];
x = isPalindrome(head);
console.log(x);

/**
 * Time -> O(N)
 * Space -> O(N)
 */
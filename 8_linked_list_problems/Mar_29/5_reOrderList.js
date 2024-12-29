let start = null;
function f(end) {
    if (end == null) return false;
    let b = f(end.next);
    // console.log(start.val, end.val)
    if (!b && (start.next == end || start == end)) {
        end.next = null;
        return true;
    }
    if (b == false) {
        let nextOfStart = start.next;
        start.next = end;
        end.next = nextOfStart;
        start = nextOfStart;
    }
    return b;
}

function reorderList(head) {
    if (head == null) return null;
    start = head;
    f(head);
    return head;
}

let head = [1, 2, 3, 4, 5];
// let head = [1, 2, 3, 4, 5, 6];
x = reorderList(head);
console.log(x);
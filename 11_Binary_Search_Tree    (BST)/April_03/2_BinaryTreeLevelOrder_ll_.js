function createNode(value) {
    return {
        data: value,
        next: null
    }
}

class CustomQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(x) {
        let newNode = createNode(x);
        if (this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeue() {
        if (this.head == null) return;
        let nextNode = this.head.next;
        this.head.next = null;
        this.head = nextNode;
        if (this.head == null) {
            this.tail = null;
        }
    }

    getFront() {
        if (this.head == null) return;
        return this.head.data;
    }

    getBack() {
        if (this.head == null) return;
        return this.tail.data;
    }

    empty() {
        return this.head == null;
    }
}

function levelOrderBottom(root) {       // this will be changed.
    if (root == null) return [];
    let qu = new CustomQueue();
    qu.enqueue(root);
    qu.enqueue(null);
    let result = [];
    let temp = [];
    while (true) {
        let front = qu.getFront();
        qu.dequeue();
        if (front == null) {
            // now in the queue only next level is present.
            if (qu.empty()) break;
            qu.enqueue(null);
            result.push(temp);       // when we complete a level push it in the result.
            temp = [];
            continue;
        }
        temp.push(front.val);      // temp stores result of the current level

        if (front.left) {
            qu.enqueue(front.left);
        }
        if (front.right) {
            qu.enqueue(front.right);
        }
    }
    result.push(temp);
    // return result.;
    return result.reverse();    // add only reverse.
}


let root = [3, 9, 20, null, null, 15, 7];
console.log(levelOrderBottom(root))
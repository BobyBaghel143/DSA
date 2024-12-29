class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
        this.prev = null;
    }
}

class DEQue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addAtFront(x) {
        if (this.head == null) {
            this.head = this.tail = new Node(x);
            return;
        }
        let NN = new Node(x);   // newNode
        NN.next = this.head;    // newNode connect to head
        this.head.prev = NN;    // head connect to newNode
        this.head = NN;         // update the head
    }

    addAtBack(x) {
        if (this.head == null) {
            this.head = this.tail = new Node(x);
            return;
        }
        let NN = new Node(x);
        this.tail.next = NN;
        NN.prev = this.tail;
        this.tail = NN;
    }

    removeAtFront() {
        if (this.head == null) return;
        let newHead = this.head.next;                // create newHead
        this.head.next = null;                       // Break the connection
        if (newHead != null) newHead.prev = null;    // Break the connection 
        this.head = newHead;                         // update the head
        if (this.head == null) this.tail = null;
    }

    removeAtBack() {
        if (this.head == null) return;
        let newTail = this.tail.prev;
        this.tail.prev = null;
        if (newTail != null) newTail.next = null;
        this.tail = newTail;
        if (this.tail == null) this.head = null;
    }

    getFront() {
        if (this.head == null) return undefined;
        return this.head.data;
    }

    getBack() {
        if (this.tail == null) return undefined;
        return this.tail.data;
    }

    empty() {
        return this.head == null;
    }

    display() {
        let temp = this.head;
        let str = "";
        while (temp != null) {
            str += temp.data + " -> ";
            temp = temp.next;
        }
        return str;
    }
}


var maxSlidingWindow = function (nums, k) {
    let dq = new DEQue();
    for (let i = 0; i < k; i++) {
        while (!dq.empty() && nums[dq.getBack()] < nums[i]) {
            dq.removeAtBack();
        }
        dq.addAtBack(i)
    }

    let result = [];
    result.push(nums[dq.getFront()]);
    for (let i = k; i < nums.length; i++) {
        if (i - k == dq.getFront()) dq.removeAtFront();
        while (!dq.empty() && nums[dq.getBack()] < nums[i]) {
            dq.removeAtBack();
        }
        dq.addAtBack(i);
        result.push(nums[dq.getFront()]);
    }
    return result;
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;
A = maxSlidingWindow(nums, k);
console.log(A);
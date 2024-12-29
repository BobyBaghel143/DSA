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

    display() {
        let temp = this.head;
        let str = "";
        while (temp != null) {
            str += temp.data + " -> ";
            temp = temp.next;
        }
        return str;
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
        let newHead = this.head.next;              // create newHead
        this.head.next = null;                     // Break the connection
        if (newHead != null) newHead.prev = null;  // Break the connection 
        this.head = newHead;                       // update the head
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

}

let dq = new DEQue();

dq.addAtFront(20);
dq.addAtFront(10);
dq.addAtBack(30);
dq.addAtBack(40);
console.log(dq.display());

dq.removeAtFront();
dq.removeAtBack();
console.log(dq.display());

dq.getFront();
console.log(dq.getFront());
console.log(dq.getBack());
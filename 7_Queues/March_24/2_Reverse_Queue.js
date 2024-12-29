function createNode(value) {
  return {
    data: value,
    next: null,
  };
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(x) {
    let newNode = createNode(x);
    // add at tail
    if (this.tail == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (this.head == null) return;
    let nextNode = this.head.next;
    this.head.next = null; // increament
    this.head = nextNode; // update the head
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

// function reverse_Queue(qu) {
//     let st = [];
//     while (qu.length != 0) {
//         // let front = qu[qu.length - 1];
//         // let front = head;
//         st.push(front);
//         qu.dequeue();
//     }

//     reverse(st);
//     while (st.length != 0) {
//         let top = st[st.length - 1];
//         qu.enqueue(top);
//         st.pop();
//     }
//     // return st;
// }

function reverse_Queue(qu) {
  let st = [];
  while (!(qu.length == 0)) {
    let el = qu.getFront();
    qu.dequeue();
    st.push(el);
  }

  while (!st.empty()) {
    let el = st[st.length - 1];
    st.pop();
    qu.enqueue(el);
  }
  return qu;
}

let qu = new Queue();

qu.enqueue(10);
qu.enqueue(20);
qu.enqueue(30);
qu.enqueue(40);
console.log(reverse_Queue(qu.getFront()));
// console.log(reverse_Queue(qu.getBack()));
console.log(qu.getFront());
console.log(qu.getBack());

// qu.dequeue();
// qu.dequeue();
// console.log(qu.getFront())
// console.log(qu.getBack())

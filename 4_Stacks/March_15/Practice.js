function InsertAtBottom(st, x) {
  let temp = [];
  while (st.length != 0) {
    let topEl = st[st.length - 1];
    temp.push(topEl);
    st.pop();
  }
  st.push(100);

  while (temp.length != 0) {
    let topEl = temp[temp.length - 1];
    st.push(topEl);
    temp.pop();
  }
  return st;
}

let st = [1, 2, 3, 4, 5];
// x=100;
z = InsertAtBottom(st);
console.log(z);




// reverse Stacks

// function InsertAtBottom(st, x) {
//     let temp = [];
//     while (st.length != 0) {
//         let topEl = st[st.length - 1];
//         temp.push(topEl);
//         st.pop()
//     }
//     st.push(x);

//     while (temp.length != 0) {
//         let topEl = temp[temp.length - 1];
//         st.push(topEl);
//         temp.pop()
//     }
//     // return st;
// }

// function reverse(st) {
//     if (st.length == 0) return;
//     let topEl = st[st.length - 1];
//     st.pop();
//     reverse(st);
//     InsertAtBottom(st, topEl);
//     return st;
// }

// let st = [1, 2, 3, 4, 5];
// z = reverse(st);
// console.log(z);

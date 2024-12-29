function quReverse(qu) {
  let st = [];
  while (!qu.length == 0) {
    let el = qu.front();
    // qu.pop();
    qu.dequeue();
    st.push(el);
  }

  while (!st.length == 0) {
    // let el = st.top();
    let el = st[st.length - 1];
    st.pop();
    // qu.push(el);
    qu.enqueue(el);
  }
  return qu;
}

let qu = [4, 3, 1, 10, 2, 6];
console.log(quReverse(qu));

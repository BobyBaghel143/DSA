function PGE(arr) {
    let n = arr.length;
    let output = Array(n);
    let st = [];
    st.push(0);

    for (let i = 1; i < n; i++) {
        while (st.length > 0 && arr[i] <= arr[st[st.length - 1]]) {       // change to be sign
            // output[st[st.length - 1]] = arr[i];
            output[arr[i]] = st[st.length - 1]
            st.pop()
        }
        st.push(i);
    }

    while (st.length > 0) {
        let topOfStack = st[st.length - 1];
        output[topOfStack] = -1;
        st.pop()
    }
    return output;
}

let arr = [5, 3, 1, 6, 2, 4];
console.log(PGE(arr));
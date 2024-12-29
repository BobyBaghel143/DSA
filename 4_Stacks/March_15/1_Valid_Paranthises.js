function Valid_Paranthises(s) {
    let st = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            st.push(s[i]);
        }
        else {
            let currClosing = s[i];
            if (st.length == 0) { return false };
            if (currClosing == ')' && st[st.length - 1] != '(') { return false };
            if (currClosing == '}' && st[st.length - 1] != '{') { return false };
            if (currClosing == ']' && st[st.length - 1] != '[') { return false };
            st.pop();
        }
    }
    return st.length == 0;
}


// let s = ['(', ')', '[', ']', '{', '}'];
let s = ['(', '{', '[', ']', '}', ')']; 
// let s = "() {} []"
x = Valid_Paranthises(s);
console.log(x);
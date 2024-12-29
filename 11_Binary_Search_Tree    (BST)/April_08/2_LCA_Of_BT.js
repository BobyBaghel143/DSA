let ans;
function f(root, p, q) {
    if (root == null) return 0;
    if (ans != null) { return 0 };
    let leftAns = f(root.left, p, q);
    let rightAns = f(root.right, p, q);
    let selfAns = f(root.val == p.val || root.val == q.val);
    if (leftAns + rightAns + selfAns >= 2 && ans == null) {
        ans = root;
    }
    return leftAns + rightAns + selfAns;
}

function LCA(root, p, q) {
    ans = null;
    f(root, p, q);
    return ans;
}


let root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]; p = 5; q = 1;
console.log(LCA(root, p, q));
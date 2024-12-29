function f(r) {
    if (r == null) return 0;
    return Math.max(f(r.left), f(r.right)) + 1;
}

var maxDepth = function (root) {
    return f(root);
}
let root = [3, 9, 20, null, null, 15, 7];
// let root = [3, 9, 20, 15, 7];
console.log(maxDepth(root));
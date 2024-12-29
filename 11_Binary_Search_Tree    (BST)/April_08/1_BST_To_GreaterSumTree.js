let globalsum;
function f(root) {
    if (root == null) return;
    f(root.right);
    root.val += globalsum;
    globalsum = root.val;
    f(root.left);
}

function BSTToGet(root) {
    globalsum = 0;
    f(root);
    return root;
}

let root = [4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8];
console.log(BSTToGet(root));
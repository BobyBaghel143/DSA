function f(root) {
    if (root == null) {
        return { isBST: true, max: -Infinity, min: Infinity };
    }
    let left = f(root.left);
    let right = f(root.right);
    if (left.isBST && right.isBST && left.max < root.val && root.val < right.min) {
        return {
            isBST: true, max: Math.max(left.max, right.max, root.val),
            min: Math.min(left.min, right.min, root.val)
        };
    } else {
        return {
            isBST: false, max: Math.max(left.max, right.max, root.val),
            min: Math.min(left.min, right.min, root.val)
        };
    }
}

function isValidBST(root) {
    return f(root).isBST;
}


let root = [2, 1, 3];
console.log(isValidBST(root));
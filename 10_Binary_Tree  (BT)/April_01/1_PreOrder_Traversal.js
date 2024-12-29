let result;
function pre(r) {
  if (r == null) return;
  result.push(r.val);
  pre(r.left);
  pre(r.right);
}

function preOrderTraversal(root) {
  result = [];
  pre(root);
  return result;
}

// let root = [1, null, 2, 3];
//let root = [1, 2, 3];
let root = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(preOrderTraversal(root));

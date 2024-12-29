let result;
let sum = 0;
function pre(r) {
  if (r == null) return;
  sum += r.val;
  //result.push(r.val);
  pre(r.left);
  pre(r.right);
}
function preOrderTraversal(root) {
  result = [];
  pre(root);
  return result;
}

// let root = [1, 2, 3, 4, 5, 6];
let root = [1, null, 2, 3];
console.log(preOrderTraversal(root));

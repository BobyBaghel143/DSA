let result;
function In(r) {
  if (r == null) return;
  In(r.left);
  result.push(r.val);
  In(r.right);
}

function InOrderTraversal(root) {
  result = [];
  In(root);
  return result;
}

let root = [1, null, 2, 3];
console.log(InOrderTraversal(root));

let result;
function Post(r) {
  if (r == null) return;
  Post(r.left);
  Post(r.right);
  result.push(r.val);
}

function PostOrderTraversal(root) {
  result = [];
  Post(root);
  return result;
}

let root = [1, null, 2, 3];
console.log(PostOrderTraversal(root));

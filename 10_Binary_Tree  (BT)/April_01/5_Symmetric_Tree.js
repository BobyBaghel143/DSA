function f(r1, r2) {
  if (r1 == null && r2 == null) return true;
  if (r1 == null) return false;
  if (r2 == null) return false;
  return r1.val == r2.val && f(r1.left, r2.right) && f(r1.right, r2.left);
}

function Symmetric(root) {
  return f(root, root);
}

// let root = [1, 2, 2, 3, 4, 4, 3];
let root = [1, 2, 2, 3, 4, 4, 3];
console.log(Symmetric(root));

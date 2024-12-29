function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function reverseList(head) {
  let n = head.length;
  let i = 0;
  let j = n - 1;
  while (i <= j) {
    swap(head, i, j);
    i++;
    j--;
  }
}

// let head = [1, 2, 3, 2, 1];
let head = [1, 2, 3, 4, 5];
x = reverseList(head);
console.log(x);

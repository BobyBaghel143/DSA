function KthLargestElement(arr) {
  let ans = 1;
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (i < i + 1) {
      ans = count + i;
      return ans;
    } else {
      break;
    }
  }
}

// let arr = [11, 3, 4];
let arr = [11, 3, 4, 6];
console.log(KthLargestElement(arr));

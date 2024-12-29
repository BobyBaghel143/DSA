var arrayPairsum = function (arr) {
  let result = 0;
  arr.sort((a, b) => a - b);
  for (let i = arr.length - 2; i >= 0; i -= 2) {
    result += arr[i];
  }
  return result;
};

let arr = [6, 2, 6, 5, 1, 2];
console.log(arrayPairsum(arr));

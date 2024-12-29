function f(arr, i) {
  if (i == arr.length) return [];
  let result = [];
  let temp = f(arr, i + 1);
  if (temp.length == 0) {
    result.push(temp);
    result.push([arr[i]].concat(temp));
  } else {
    for (let j = 0; j < temp.length; j++) {
      result.push(temp[j]);
      result.push([arr[i]].concat(temp[j]));
    }
  }
  return result;
}
let response = f([1, 2, 3], 0);
console.log(response);

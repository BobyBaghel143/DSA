function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
var MoveNegative = function (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j <= arr.length; j++) {
            if (arr[j] == Negetive) {
                swap(arr, i, j);
                i++;
                j++;
            } 
            else {
                arr[j]++;
            }
        }
    }
    return result;
}
let arr = [1, -3, 4, -6, 7, 8, -9];
x = MoveNegative(arr);
console.log(x);
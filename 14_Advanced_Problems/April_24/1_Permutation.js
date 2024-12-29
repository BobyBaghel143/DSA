// let result;
// function f(str, output) {
//     if (str.length == 0) {
//         result.push(output);
//         return;
//     }
//     for (let i = 0; i < str.length; i++) {
//         let remaining = str.slice(0, i).concat(str.slice(i + 1));
//         f(remaining, output.concat(str[i]));
//     }
// }

// function permutation(nums) {
//     result = [];
//     let str = [];
//     for (let i = 0; i < nums.length; i++) {
//         str.push(nums[i]);
//     }
//     // console.log(str);
//     f(str, []);
//     return result;
// }

// let nums = [1, 2, 3];
// console.log(permutation(nums));







// Backtracking   use

let result;
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function f(arr, i) {
    if (i == arr.length - 1) {
        // only one char is remaining
        result.push([...arr]);  //  everytime new array is pushed
        return;
    }
    for (let j = i; j < arr.length; j++) {
        swap(arr, i, j);
        f(arr, i + 1);
        swap(arr, i, j);
    }
}

function permutation(nums) {
    result = [];
    f(nums, 0);
    return result;
}

let nums = [1, 2, 3];
console.log(permutation(nums));
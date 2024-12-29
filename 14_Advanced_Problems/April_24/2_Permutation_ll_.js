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

    let mp = {};
    for (let j = i; j < arr.length; j++) {
        if (mp[arr[j]]) continue;
        // entry
        mp[arr[j]] = true;
        swap(arr, i, j);
        f(arr, i + 1);
        swap(arr, i, j);
    }
}

function permutationUnique(nums) {
    result = [];
    f(nums, 0);
    return result;
}


let nums = [1, 2, 1];
// let nums = [1, 1, 1];
console.log(permutationUnique(nums));
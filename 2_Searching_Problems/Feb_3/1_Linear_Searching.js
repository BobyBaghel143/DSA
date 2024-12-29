var linearSearching = function (arr, target) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    // return -1;
    return "none";
};
let arr = [9, 3, 1, 10, -1, 6, 8, 13, 2], target = 13;
x = linearSearching(arr, target);
console.log(x);
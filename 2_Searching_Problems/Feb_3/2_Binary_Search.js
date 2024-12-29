var BinarySearch = function (arr, target) {
    let lo = 0;
    let hi = arr.length;
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return -1;
};
let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], target = 13;
console.log(BinarySearch(arr, target));

var findPeakElement = function (arr) {
    if (arr.length == 1) return arr[0];
    let n = arr.length;
    let lo = 0;
    let hi = n - 1;
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (mid - 1 < 0 && arr[mid] > arr[mid + 1]) return arr[mid];
        if (mid + 1 >= n && arr[mid] > arr[mid - 1]) return arr[mid];
        if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) return arr[mid];
        if (arr[mid] > arr[mid + 1]) {
            hi = mid - 1;
        }
        else {
            lo = mid + 1;
        }
    }
    return -1;
}
// let arr = [1, 2, 3, 1];
let arr = [1, 2, 1, 3, 5, 6, 4];
// let arr=[5];
x = findPeakElement(arr);
console.log(x);
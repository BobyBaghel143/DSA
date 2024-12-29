function counting_sort(arr) {
    // only non negetive integers.
    let maxEl = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        maxEl = Math.max(maxEl, arr[i]);
    }
    // freq arr
    let freq = Array(maxEl + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        let currElement = arr[i];
        freq[currElement]++;
    }

    // freq arr  prefix sum
    for (let i = 1; i < freq.length; i++) {
        freq[i] = freq[i] + freq[i - 1]
    }

    // output arr
    let output = Array(arr.length);
    for (let i = arr.length-1; i >= 0; i--) {
        output[freq[arr[i]] - 1] = arr[i];
        freq[arr[i]]--;
    }
    return output;
}
let arr = [9, 1, 2, 3, 2, 1, 5, 5, 4, 1, 2, 3];
// let arr = [1, 4, 1, 2, 7, 5, 2];
console.log(counting_sort(arr));
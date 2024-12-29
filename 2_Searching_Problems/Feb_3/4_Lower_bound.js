var lower_bound = function (arr, x) {

    let lo = 0;
    let hi = arr.length - 1;
    let ans = arr.length;
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (arr[mid] < x) {
            lo = mid + 1;
        }
        else {
            ans = mid;
            hi = mid - 1;
        }
    }
    return ans;
}
let arr = [1, 2, 2, 3, 3, 3, 5, 8], x = 3;
a = lower_bound(arr, x);
console.log(a);

    /**
     * Time -> O(longN)
     * Space -> O(1);
     */

    
//  Corver case
// if (arr[0] >= x) return 0;
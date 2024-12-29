var FindMissingNumber = function (nums) {
    if (nums[0] != 0) return 0;
    let lo = 0;
    let hi = nums.length;
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        ans = nums.length;
        if (nums[mid] == mid) {
            lo = mid + 1;
        }
        else {
            ans = mid;
            hi = mid - 1;
        }
    }
    return ans;
}

let nums = [0, 1, 2, 3, 4, 6, 7, 9, 10, 11, 12, 13, 14];
// let nums = [0, 1, 2, 3, 4, 5, 6, 7, 9];
console.log(FindMissingNumber(nums));
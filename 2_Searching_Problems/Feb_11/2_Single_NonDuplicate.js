var findSingleElement = function (nums) {
    let n = nums.length;
    if (n.length == 1) return nums[0];
    let lo = 0;
    let hi = n - 1;
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (mid - 1 < 0 && nums[mid] != nums[mid + 1]) return nums[mid];
        if (mid + 1 >= n && nums[mid] != nums[mid - 1]) return nums[mid];
        if (nums[mid - 1] != nums[mid] && nums[mid] != nums[mid + 1]) return nums[mid];
        if (nums[mid] == nums[mid + 1]) {
            if (mid % 2 == 0) {
                lo = mid + 2;
            }
            else {
                hi = mid - 1;
            }
        }
        else {
            if (mid % 2 == 0) {
                hi = mid - 2;
            }
            else {
                lo = mid + 1;
            }
        }
    }
    return -1;
}
// let nums = [1, 1, 3, 3, 8, 8, 10, 11, 11, 13, 13];
let nums = [11, 12, 45, 34 ,45, 12, 11];
// let nums = [4];
x = findSingleElement(nums);
console.log(x);
var lower_bound = function (nums, x) {
    let lo = 0;
    let hi = nums.length - 1;
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        ans = nums.length;
        if (nums[mid] < x) {
            lo = mid + 1;
        }
        else {
            ans = mid;
            hi = mid - 1;
        }
    }
    return ans;
};

var upper_bound = function (nums, x) {
    let lo = 0;
    let hi = nums.length - 1;
    ans = nums.length;
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (nums[mid] <= x) {
            lo = mid + 1;
        }
        else {
            ans = mid;
            hi = mid - 1;
        }
    }
    return ans;
};

var Search_Range = function (nums, target) {
    let lb = lower_bound(nums, target);
    if (lb >= nums.length || nums[lb] != target) {
        return [-1, -1];
    }

    let ub = upper_bound(nums, target)
    return [lb, ub - 1];
}
//  let nums = [5, 7, 7, 8, 8, 10], target = 8;
let nums = [1, 2, 3, 4, 5, 6, 7, 7,], target = 7;
console.log(Search_Range(nums, target));
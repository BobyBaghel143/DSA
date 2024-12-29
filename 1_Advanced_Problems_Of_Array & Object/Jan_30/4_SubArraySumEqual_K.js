var SubArraySumEqualK = function (nums, k) {
  let mp = {};
  let prefixSum = nums[0];
  mp[nums[0]] = 1;
  let ans = 0;

  if (prefixSum == k) ans++;
  for (let i = 1; i < nums.length; i++) {
    prefixSum += nums[i];

    if (mp[prefixSum - k]) {
      ans += mp[prefixSum - k];
    }

    if (prefixSum == k) {
      ans += 1;
    }

    if (mp[prefixSum]) {
      mp[prefixSum]++;
    } else {
      mp[prefixSum] = 1; // create an entry
    }
  }
  return ans;
};

let nums = [1, 1, 1],
  k = 2;
// let nums = [1, 2, 3, 4, 5], k = 3;
x = SubArraySumEqualK(nums, k);
console.log(x);

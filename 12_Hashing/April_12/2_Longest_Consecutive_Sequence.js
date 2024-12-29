function longestConsecutiveSeq(nums) {
  let mp = {};
  for (let i = 0; i < nums.length; i++) {
    if (!mp[nums[i]]) mp[nums[i]] = true; // add on the entry.
  }
  let key_arr = Object.keys(mp);
  let ans = 0;
  for (let j = 0; j < key_arr.length; j++) {
    let curr = Number(key_arr[j]); // curr element.
    if (mp[curr - 1]) continue; // is curr the start of a sequence ?
    let i = 0; // iteration from 0
    while (mp[curr + i]) i++; // Check in the Mapping
    ans = Math.max(ans, i);
  }
  return ans;
}

let nums = [100, 4, 200, 1, 3, 2];
// let nums = [9, 1, 3, 4, 8, 2, 7, 12, 13, 10, 0, 11];
console.log(longestConsecutiveSeq(nums));

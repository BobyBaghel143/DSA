function LongSubStringNoRepeat(s) {
  let mp = {};
  let start = 0;
  let end = 0;
  let ans = 0;
  while (end < s.length) {
    if (!mp[s[end]]) {
      mp[s[end]] = 1;
    } else {
      mp[s[end]]++;
    }
    while (mp[s[end]] > 1) {
      mp[s[start]]--;
      start++;
    }
    ans = Math.max(ans, end - start + 1);
    end++;
  }

  return ans;
}

// let s = "abcabcbb";
// let s = "bbbbb";
let s = "dcabaacbbacdxaddbadcxyz";
console.log(LongSubStringNoRepeat(s));

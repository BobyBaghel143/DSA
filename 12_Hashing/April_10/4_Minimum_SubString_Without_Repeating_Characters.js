function MinSubStringNoRepeat(s) {
  let mp = {};
  let start = 0;
  let end = 0;
  let ans = Infinity; // it will be changed
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
    ans = Math.min(ans, end - start + 1); // max ->  min   will be changed
    end++;
  }
  return ans;
}

let s = "abcabcbb";
// let s = "bbbbb";
console.log(MinSubStringNoRepeat(s));

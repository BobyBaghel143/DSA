function minWindow(s, t) {
  if (s.length < t.length) return "";
  let ms = {}; // mapping
  let mt = {}; // mapping
  // preparing freq mapping of t
  for (let i = 0; i < t.length; i++) {
    if (!ms[t[i]]) {
      mt[t[i]] = 1;
    } else {
      mt[t[i]]++;
    }
  }
  //console.log(mpt);
  let len = 0;
  let ans = Infinity;
  let ans_idx = -1;
  let start = 0;
  let end = 0;
  while (end < s.length) {
    // expansion
    if (!ms[s[end]]) {
      ms[s[end]] = 1;
    } else {
      ms[s[end]]++;
    }
    if (ms[s[end]] <= mt[s[end]]) {
      len++;
    }
    // console.log(ms,len);
    if (len == t.length) {
      // try to shrink
      while (!mt[s[start]] || ms[s[start]] > mt[s[start]]) {
        ms[s[start]]--;
        start++;
      }
      if (end - start + 1 < ans) {
        ans = end - start + 1;
        ans_idx = start;
      }
    }
    end++;
  }
  // console.log(ans);
  if (ans_idx == -1) return "";
  let res = "";
  for (let i = 0; i < ans; i++) {
    res += s[ans_idx + i];
  }
  return res;
}

let s = "ADOBECODEBANC",
  t = "ABC";
// let s = "abcdabcd", t = "abd";
console.log(minWindow(s, t));

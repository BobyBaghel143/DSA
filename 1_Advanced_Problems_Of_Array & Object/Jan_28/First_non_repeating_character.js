var firstUniqChar = function (s) {
  let mp = {};
  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    if (!mp[curr]) {
      mp[curr] = 1;
    } else {
      mp[curr]++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (mp[s[i]] == 1) return i;
  }
  return -1;
};

let s = [1, 1, 2, 3, 2, 3, 4];
r = firstUniqChar(s);
console.log(r);

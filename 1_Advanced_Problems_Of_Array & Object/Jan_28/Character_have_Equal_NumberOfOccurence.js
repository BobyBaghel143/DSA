var EqualOfNumberOccurance = function (s) {
    let mp = {};
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        if (!mp[curr]) {
            mp[curr] = 1;
        } else {
            mp[curr]++;
        }
    }

    let values = Object.values(mp);
    let temp = values[0];
    for (let i = 1; i < values.length; i++) {
        if (temp != values[i]) return false;
    }
    return true;
};

let s = "abacbc";
// let s = "boby"
values= EqualOfNumberOccurance(s);
console.log(values)
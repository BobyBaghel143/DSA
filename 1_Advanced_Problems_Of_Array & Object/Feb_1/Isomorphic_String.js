var Isomorphic = function (s, t) {
    /**
     * Time -> O(N)
     * Space -> O(1)
     */
    let m1 = {};
    let m2 = {};
    for (let i = 0; i < s.length; i++) {
        let char_s = s[i];
        let char_t = t[i];
        if (!m1[char_s] && !m2[char_t]) {
            m1[char_s] = char_t;
            m2[char_t] = char_s;
        }
        else if (m1[char_s] != [char_t] && m2[char_t] != [char_s]) {
            return false;
        }
    }
    return true;
}

// let s = "egg", t = "add";
let s = "paper", t = "title";
// let s="paper", t="tiles";
x = Isomorphic(s, t);
console.log(x);
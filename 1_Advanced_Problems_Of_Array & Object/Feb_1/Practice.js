/*
var findWinner_loser = function (matches) {
    let players = Array(100001).fill(-1);
    for (let i = 0; i < matches.length; i++) {
        let winner = matches[i][0];
        let loser = matches[i][1];
        if (players[winner] == -1 || players[winner] == 0) {
            players[winner] = 0;
        }
        if (players[loser] == -1) {
            players[loser] = 1;
        }
        else if (players[loser] >= 0) {
            players[loser]++;
        }
    }

    let ans = [[], []];
    for (let i = 0; i < players.length; i++) {
        if (players[i] == 0) {
            ans[0].push(i);
        }
        else if (players[i] == 1) {
            ans[1].push(i);
        }
    }
    return ans;
}
let matches = [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]];
x = findWinner_loser(matches);
console.log(x);
*/



/*
var Isomorphic = function (s, t) {
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
*/
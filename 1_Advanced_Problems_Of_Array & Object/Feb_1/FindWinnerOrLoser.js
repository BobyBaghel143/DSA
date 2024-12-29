var findWinner_loser = function (matches) {
  let players = Array(100001).fill(-1);
  for (let i = 0; i < matches.length; i++) {
    let winner = matches[i][0];
    let looser = matches[i][1];
    if (players[winner] == -1 || players[winner] == 0) {
      players[winner] = 0;
    }

    if (players[looser] == -1) {
      players[looser] = 1;
    } else if (players[looser] >= 0) {
      players[looser]++;
    }
  }

  let ans = [[], []];
  for (let i = 0; i < players.length; i++) {
    if (players[i] == 0) {
      ans[0].push(i);
    } else if (players[i] == 1) {
      ans[1].push(i);
    }
  }
  return ans;
};

let matches = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [10, 4],
  [10, 9],
];
// let matches=[[2,3],[1,3],[5,4],[6,4]];
x = findWinner_loser(matches);
console.log(x);

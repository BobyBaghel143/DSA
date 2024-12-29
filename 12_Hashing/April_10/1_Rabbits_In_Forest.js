function RabbitInForest(answers) {
  let res = 0;
  let mp = {};
  for (let i = 0; i < answers.length; i++) {
    if (!mp[answers[i]]) {
      res += answers[i] + 1;
      mp[answers[i]] = answers[i];
    } else {
      mp[answers[i]]--;
      if (mp[answers[i]] == 0) {
        delete mp[answers[i]];
      }
    }
  }
  return res;
}

let answers = [1, 1];
// let answers = [1, 1, 2];
// let answers = [10, 10-, 10];
// let answers = [0, 1, 1, 2, 2, 2, 2, 3, 3];
console.log(RabbitInForest(answers));

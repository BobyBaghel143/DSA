let arr = [2, 3, 3];
let n = 2;
let lhs = [];
for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
        for (let c = 0; c < n; c++) {
            lhs.push(arr[a] * arr[b] + arr[c]);
        }
    }
}

let rhs = [];
for (let d = 0; d < n; d++) {
    for (let e = 0; e < n; e++) {
        for (let f = 0; f < n; f++) {
            if (arr[d] != 0)
            rhs.push(arr[d] * (arr[e] + arr[f]));
        }
    }
}
// lhs == rhs;
console.log(lhs, rhs);

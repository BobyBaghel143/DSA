var NotTringle = function (arr) {
    arr.sort(function (a, b) {
        return a - b;
    });
    let n = arr.length - 1;
    let sum = 0;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            sum = a[i] + a[j];
            // k = ub(a, sum);
            ans += n;
        }
    }
    return ans;
}
// let arr = [1, 3, 4, 6, 12, 18], k = 3;
let arr = [4, 2, 10];
x = NotTringle(arr);
console.log(x);

// Time ->  O(n^2 logn);
// // Linear Search Squaroot
// var LinearSquaroot = function (x) {
//     let ans = 1;
//     for (let i = 1; i <= x -1; i++) {
//         if (i * i >= x) {
//             ans = i;
//             break;
//         }
//         else {
//         }
//     }
//     return ans;
// }

// let x = 100;
// console.log(LinearSquaroot(x));




// // Binary Search Squaroot
// var Squaroot = function (x) {
//     if (x == 0) return 0;
//     let lo = 1;
//     let hi = x - 1;
//     let ans = 1;
//     while (lo <= hi) {
//         let mid = lo + Math.floor((hi - lo) / 2);
//         if (mid * mid > x) {
//             hi = mid - 1;
//         }
//         else {
//             ans = mid;
//             lo = mid + 1;
//         }
//     }
//     return ans;
// };
// let x = 100;
// console.log(Squaroot(x));
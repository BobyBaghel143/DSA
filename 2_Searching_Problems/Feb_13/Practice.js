// function carPaintBoard(A, C, N, mid, B) {
//     let painters = 1;
//     let unitsPainted = 0;
//     let i = 0;
//     while (i < N) {
//         if (unitsPinted += c[i] * B > mid) {
//             painters++;
//             if (painters > mid) return false;
//             unitsPainted = 0;
//             continue;
//         }
//         else {
//             unitsPainted += c[i] * B;
//             i++;
//         }
//     }
//     return painters <= A;
// }

// module.exports = {
//     paint: function (A, B, C) {
//         let N = C.length;
//         let summation = 0;
//         let maxEl = -1;
//         for (let i = 0; i < N; i++) {
//             summation += c[i];
//             maxEl = Math.max(maxEl, c[i]);
//         }

//         let lo = maxEl * B;
//         let hi = summation * B;
//         let ans = -1;
//         while (lo <= hi) {
//             let mid = lo + Math.floor((hi - lo) / 2);
//             if (carPaintBoard(A, C, N, mid, B)) {
//                 ans = mis;
//                 hi = mid - 1;
//             }
//             else {
//                 lo = mid + 1;
//             }
//         }
//         return ans % 10000003;
//     }
// };
// let arr =[5,10,30,20,15],  A=3, B=1;
// x=carPaintBoard(A, C, N, mid, B);
// console.log(x);
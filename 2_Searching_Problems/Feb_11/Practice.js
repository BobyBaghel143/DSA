// // find peak Element
// var findPeakElement = function (arr) {
//     let n = arr.length;
//     if (n == 1) return arr[0];
//     let lo = 0;
//     let hi = n - 1;
//     while (lo <= hi) {
//         let mid = lo + Math.floor((hi - lo) / 2);
//         if (mid - 1 < 0 && arr[mid] > arr[mid + 1]) return arr[mid];
//         if (mid + 1 >= n && arr[mid] > arr[mid - 1]) return arr[mid];
//         if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) return arr[mid];
//         if (arr[mid] > arr[mid + 1]) {
//             hi = mid - 1;
//         }
//         else {
//             lo = mid + 1;
//         }
//     }
//     return -1;
// };

// // let arr = [1, 2, 1, 3, 5, 6, 4];
// let arr = [1, 2, 3, 1, 6, 8, 2, 9, 3];
// console.log(findPeakElement(arr));





// var SingleNonDuplicate = function (nums) {
//     let n = nums.length;
//     if (n == 1) return nums[0];
//     let lo = 0;
//     let hi = n - 1;
//     while (lo <= hi) {
//         let mid = lo + Math.floor((hi - lo) / 2);
//         if (mid - 1 < 0 && nums[mid] != nums[mid + 1]) return nums[mid];
//         if (mid + 1 >= n && nums[mid] != nums[mid - 1]) return nums[mid];
//         if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1]) return nums[mid];
//         if (nums[mid] == nums[mid + 1]) {
//             if (mid % 2 == 0) {
//                 lo = mid + 2;
//             }
//             else {
//                 hi = mid - 1;
//             }
//         }
//         else {
//             if (mid % 2 == 0) {
//                 hi = mid - 2;
//             }
//             else {
//                 lo = mid + 1;
//             }
//         }
//     }
//     return -1;
// }
// let nums = [1, 1, 3, 3, 8, 8, 10, 11, 11, 13, 13];
// console.log(SingleNonDuplicate(nums));
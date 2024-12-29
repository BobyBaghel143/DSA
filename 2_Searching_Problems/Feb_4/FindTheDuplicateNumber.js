// var findDuplicateNumber = function (nums) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j <= nums.length; j++) {
//             if (arr[i] == arr[j]) {
//                 return i;
//             }
//         }
//     }
//     return -1;
// };
// let nums = [1, 3, 4, 2, 2];
// x = findDuplicateNumber(nums);
// console.log(x);




// var findDuplicateNumber=function(nums){
//     for(let i=0; i<=nums.length; i++){
//         let currElement= arr[i];    // arr[i]   in mod
//         arr[currElement] *=(-1);
//         if(arr[currElement]<0){
//             return currElement
//         }
//     }
//     return -1;
// }
// let nums = [1, 3, 4, 2, 2];
// console.log(findDuplicateNumber(nums));

// //     only for twice element

// var findDuplicateNumber = function (nums) {
//     let sumOfArray = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sumOfArray += nums[i];
//     }

//     let n = nums.length - 1;
//     let sumOfNaturalNumber = Math.floor((n * (n + 1)) / 2);
//     return sumOfArray - sumOfNaturalNumber;
// };
// let nums = [1, 3, 4, 2, 2];
// // let nums = [1, 1,];
// console.log(findDuplicateNumber(nums));

// var findDuplicateNumber = function (nums) {
//     let lo = 0;
//     let hi = nums.length - 1;
//     while (lo <= hi) {
//         let mid = lo + Math.floor((hi - lo) / 2);
//         if (arr[mid] == mid - 1) {
//             if (arr[mid] == arr[mid - 1]) {
//                 return mid;
//             }
//             hi = mid - 1;
//         }
//         else {
//             lo = mid + 1;
//         }
//     }
//     return -1;
// }

// let nums = [0, 1, 1, 2, 4, 5, 6];
// console.log(findDuplicateNumber(nums));



// //  floyed method      rabbit &  toyet
// var findDuplicateNumber = function (arr) {
//   let t = arr[0];
//   let r = arr[0];
//   do {
//     t = arr[t];
//     r = arr[arr[r]];
//   } while (t != r);
//   t = arr[0];

//   while (t != r) {
//     t = arr[t];
//     r = arr[r];
//   }
//   return t;
// };

// let nums = [1, 3, 4, 2, 2];
// // let nums = [1,1,];
// console.log(findDuplicateNumber(nums));



// var findDuplicateNumber = function (nums) {
//     for (let i = 0; i <= nums.length; i++) {
//         if (arr[i] == arr[i - 1]) {
//             return arr[i];
//         }
//     }
//     return -1;
// }

// let nums = [1, 3, 4, 2, 2];
// let nums = [1, 1,];
// console.log(findDuplicateNumber(nums));
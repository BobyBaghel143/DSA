// var findDuplicateNumber = function (nums) {
//     // nums.sort(function nums(a, b) {
//     //     return a - b;
//     // })
//     let n = nums.length;
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j <= n; j++) {
//             if (nums[i] == nums[j]) {
//                 return nums[i];
//             }
//             else {
// return nums[j];
//             }
//         }
//     }
//     return -1;
// }
// let nums = [3, 1, 4, 6, 4];
// console.log(findDuplicateNumber(nums));






// var duplicateN = function (nums) {
//     // if (s.length != t.length) return false;
//     nums.sort(function nums(a, b) {
//         return a - b;
//     })
//     let n = nums.length;
//     let mp = {};
//     for (let i = 0; i <= n; i++) {
//         let curr = n[i];
//         if (mp[curr]) {
//             mp[curr]++;
//         }
//         else {
//             mp[curr] == 1;
//             if (mp[curr] == 0) delete mp[curr];
//         }
//     }
// }
// let nums = [3, 1, 4, 6, 4];
// console.log(duplicateN(nums));






// // Binary search duplicate
// var findDuplicateNumber=function (nums){
//     let n=nums.length;
//     let i=0;
//     let hi=n-1;
//     while(lo<=hi){
//         let mid=lo+Math.floor((hi-lo)/2);
//         if(arr[mid]==mid-1){
//             if(arr[mid]==arr[mid-1]){
//                 return mid;
//             }
//             else{
//                 hi=mid-1;
//             }
//         }
//         else{
//             lo=mid+1;
//         }
//     }
//     return -1;
// }
// let nums=[0,1,1,2,3,4,5,6];
// console.log(findDuplicateNumber(nums));









































// var findDuplicateNumber = function (arr) {
//     // arr.sort(function (a,b){
//     //     return a-b;
//     // })
//     let t = 0;
//     let r = 0;
//     do {
//         t = arr[t]
//         r = arr[arr[r]];
//     }
//     while (t != r) {
//         t = arr[0];
//     }
//     while (t != r) {
//         t = arr[t]
//         r = arr[r];
//     }
//     return t;
// }

// // let arr = [3, 2, 5, 6, 4, 4, 4, 4, 6, 7];
// let arr = [3, 1, 3, 2, 4];
// console.log(findDuplicateNumber(arr));





/*
    // only for twice element
var findDuplicateNumber = function (nums) {
    let sumOfArray = 0;
    for (let i = 0; i < nums.length; i++) {
        sumOfArray += nums[i];
    }

    let n = nums.length - 1;
    let sumOfNaturalNumber = Math.floor((n * (n + 1)) / 2);
    return sumOfArray - sumOfNaturalNumber;
}
// let nums=[3, 2, 5, 6, 4, 4, 7];
let nums = [1, 3, 3, 4, 5, 2];
console.log(findDuplicateNumber(nums));
*/




//     // Rotate Array
// function swap(arr, i, j) {
//     let temp = arr[i];
//     arr[i] = arr[j]
//     arr[j] = temp;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7], k = 3;
// let n = arr.length;

// let i = 0;
// let j = n - k - 1;
// while (i <= j) {
//     swap(arr, i, j);
//     i++;
//     j--;
// }


// i = n - k;
// j = arr.length - 1;
// while (i <= j) {
//     swap(arr, i, j);
//     i++;
//     j--;
// }


// i = 0;
// j = arr.length - 1;
// while (i <= j) {
//     swap(arr, i, j);
//     i++;
//     j--;
// }
// console.log(arr);
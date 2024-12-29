// missing number
// reverse integer



// var FindMissingNumber = function (nums) {
//   if (nums[0] != 0) return 0;
//   let lo = 0;
//   let hi = nums.length;
//   let ans = nums.lenght;
//   while (lo <= hi) {
//     let mid = Math.floor((lo + hi) / 2);
//     if (nums[mid] == mid) {
//       lo = mid + 1;
//     }
//     else {
//       ans = mid;
//       hi = mid - 1;
//     }
//   }
//   return ans;
// }
// let nums = [0, 1, 2, 3, 4, 6, 7, 9, 10, 11, 12, 13, 14];
// console.log(FindMissingNumber(nums));





// //   revers Array
// function swap(arr,i,j){
//     let temp=arr[i];
//     arr[i]=arr[j]
//     arr[j]=temp;
// }
// let arr=[1,2,3,4,5,6,7,8,9];
// let i=4;
// let j=arr.length-1;
// while(i<=j){
//     swap(arr,i,j);
//     i++;
//     j--;
// }
// console.log(arr);
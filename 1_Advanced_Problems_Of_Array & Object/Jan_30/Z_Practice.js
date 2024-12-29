// let Anagram = function (s, t) {
//     if (s.length != t.length) {
//         return false;
//     }

//     let mp = {};
//     for (let i = 0; i < s.length; i++) {
//         let curr = s[i];
//         if (mp[curr]) {
//             mp[curr]++;
//         }
//         else {
//             mp[curr] = 1;
//         }
//     }

//     for (let i = 0; i < t.length; i++) {
//         let curr = t[i];
//         if (mp[curr]) {
//             mp[curr]--;
//             if (mp[curr] == 0) delete mp[curr];
//         }
//         else {
//             return false;
//         }
//     }
//     return Object.keys(mp).length == 0;
// }
// let s = "anagram", t = "nagaram";
// x = Anagram(s, t);
// console.log(x);





/*
var GroupAnagram = function (str) {
    let mp = {};
    for (let i = 0; i < str.length; i++) {
        let currStr = str[i];
        let sortStr = currStr.split("").sort().join("");
        if (mp[sortStr]) {
            mp[sortStr].push(currStr);
        }
        else {
            mp[sortStr] = [currStr];
        }
    }
    return Object.values(mp);
}
let str = ["eat", "tea", "tan", "ate", "nat", "bat"];
x = GroupAnagram(str);
console.log(x);
*/



/*
var countSubArrayWithSum0 = function (arr) {
    let prefixSum = Array(arr.length).fill(0);
    prefixSum[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }

    let mp = {};
    for (let i = 0; i < prefixSum.length; i++) {
        let curr = prefixSum[i];
        if (mp[curr]) {
            mp[curr]++;
        }
        else {
            mp[curr] = 1;
        }
    }

    let ans = 0;
    let keys = Object.keys(mp);
    for (let i = 0; i < keys.length; i++) {
        let curr = keys[i];
        if (mp[curr] > 1) {
            ans += Math.floor((mp[curr] * (mp[curr] - 1)) / 2);
        }
    }

    if (mp[0]) {
        ans += mp[0];
    }
    return ans;
};
let arr = [1, -1, 3, 4, 5, -9, 2, 1, -3, 6, -6];
x = countSubArrayWithSum0(arr);
console.log(x);
*/


/*
var SubArraySumEqualK = function (nums, k) {
    let mp = {};
    let prefixsum = nums[0];
    mp[nums[0]] = 1;
    let ans = 0;

    // if (mp[prefixsum == k]) ans++;
    for (let i = 1; i < nums.length; i++) {
        prefixsum += nums[i];

        if (mp[prefixsum - k]) {
            ans += mp[prefixsum - k];
        }
        if (mp[prefixsum == k]) {
            ans++;
        }
        if (mp[prefixsum]) {
            mp[prefixsum]++;
        }
        else {
            mp[prefixsum] = 1;
        }
    }
    return ans;
}

let nums = [1, 2, 3], k = 3;
// let nums = [1, 1, 1], k = 2;
x = SubArraySumEqualK(nums, k);
console.log(x);
*/
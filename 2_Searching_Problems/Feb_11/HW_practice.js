    // Valid Palindrome
function ValidPalindrome(nums) {
    let str = "" + nums;
    let i = 0;
    let j = str.length - 1;
    while (i <= j) {
        if (str[i] == str[j]) {
            i++;
            j--;
        }
        else {
            return false;
        }
    }
    return true;
}

let nums = [1234321];
// let nums = "abcdedcba";
console.log(ValidPalindrome(nums));
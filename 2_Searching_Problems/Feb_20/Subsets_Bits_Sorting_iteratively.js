let arr = [1, 2, 3];
let n = arr.length;
let p = (1 << n) - 1;
for (let nums = 0; nums <= p; nums++) {
    temp = nums;
    result = [];
    j = arr.length - 1;
    while (j >= 0 && temp > 0) {
        isEven = temp % 2 == 0;
        if (!isEven) {
            result.push(arr[j]);
        }
        j--;
        temp = temp >> 1;
    }
    console.log(result.reverse());
}
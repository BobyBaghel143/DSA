function copier(input) {
    let ans = -1;
    let lo = Math.min(x, y);
    let hi = nx_max(x, y);
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        let copies = mid / x + mid / y;
        if (copies >= n - 1) {
            ans = mid;
            hi = mid - 1;
        }
        else {
            lo = mid + 1;
        }
        return ans + min(x, y);

    }
};
let input = [4, 1, 1];
console.log(copier(input));
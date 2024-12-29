function canPlaceCows(stalls, n, c, mid) {
    // let n = stalls.length;
    let count = 1;
    let last_posi = stalls[0];
    for (let i = 0; i < n; i++) {
        if (stalls[i] - lost_position >= mid) {
            count++;
            last_posi = stalls[i];
        }
        if (count >= c) return true;
    }
    return false;
}

let lo = 1;
let hi = stalls[max] - stalls[min];
let ans = -1;
while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (canPlaceCows(stalls, n, c, mid)) {
        ans = mid;
        lo = mid + 1;
    }
    else {
        hi = mid - 1;
    }
    return ans;
}

let stalls = [1, 2, 4, 8, 9], c = 3;
console.log(canPlaceCows(stalls, n, c, mid));
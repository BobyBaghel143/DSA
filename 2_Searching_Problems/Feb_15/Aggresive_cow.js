function canPlaceCows(stalls, n, c, mid) {
    let count = 1;   // we can place cow definetly
    let last_posi = stalls[0];  // can place 1st cow on 1st stall
    for (let i = 0; i < n; i++) {
        if (stalls[i] - last_posi >= mid) {
            count++;
            last_posi = stalls[i];
        }
        if (count >= c) return true;
    }
    return false;
}


let lo = 1;
let hi = max - min;
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
let stalls=[1,2,4,8,9], c=3;

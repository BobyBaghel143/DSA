function f(r, currLevel) {
    let result=[];
    if (currLevel > maxLevel) {
        maxLevel = currLevel;
        result.push(r.val);
    }

    f(r.left, currLevel + 1);
    f(r.right, currLevel + 1)
}
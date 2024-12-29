var MinStack = function () {
    this.st = [];
    this.mn = Infinity;
};

MinStack.prototype.push = function (val) {
    if (this.st.length == 0) {
        this.st.push(val);
        this.mn = val;
    } else {
        if (val < this.mn) {
            this.st.push(val - this.mn);
            this.mn = val;     // update the prev min
        } else {
            this.st.push(val - this.mn);    // dont update
        }
    }
};

MinStack.prototype.pop = function () {
    if (this.st.length > 0) {
        if (this.st[this.st.length - 1] >= 0) {
            this.st.pop();
        } else {
            this.mn = this.mn - this.st[this.st.length - 1];
            this.st.pop();
        }
    }
};

MinStack.prototype.top = function () {
    if (this.st.length == 1) {
        return this.st[0];
    }
    if (this.st[this.st.length - 1] >= 0) {
        return this.mn + this.st[this.st.length - 1]
    } else {
        return this.mn;
    }
};

MinStack.prototype.getMin = function () {
    if (this.st.length == 1) return this.st[0]
    return this.mn;
};

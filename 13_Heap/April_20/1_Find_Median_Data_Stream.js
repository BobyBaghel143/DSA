class Heap {
    #arr;
    constructor(cmp) {
        this.#arr = [];
        this.comparator = cmp;  // function 
    }
    size() {                     // this is added for this problem
        return this.#arr.length;
    }

    swap(i, j) {
        let temp = this.#arr[i];
        this.#arr[i] = this.#arr[j];
        this.#arr[j] = temp;
    }

    upheapify(idx) {
        /**
         * Time -> O(logn);
         * Space -> O(1);
         */
        while (idx > 0) {      // if idx is 0 you  dont have a parent
            let pi = Math.floor((idx - 1) / 2);   // parent Index
            if (this.comparator(this.#arr[idx] > this.#arr[pi])) {
                // swap
                this.swap(idx, pi);
            }
            else {
                // no more upheapify needed
                break;
            }
            idx = pi;
        }
    }

    downheapify(idx) {
        /**
         * Time -> O(logn);
         * Space -> O(1);
         */
        while (idx < this.#arr.length) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let result = idx;   // assume that max element is the root;
            if (left < this.#arr.length && this.comparator(this.#arr[left] > this.#arr[result])) {
                // if left child exists and left node is bigger than the last assumed result.
                result = left;    // make left child the new result candidate
            }
            if (right < this.#arr.length && this.comparator(this.#arr[right] > this.#arr[result])) {
                // if right child exists and right node is bigger than the last assumed result.
                result = right;
            }

            // swap the idx with result;
            if (idx == result) {
                // root was the largest
                break;
            }

            this.swap(idx, result);
            idx = result;
        }
    }

    insert(data) {
        /**
         * Time -> O(logn);
         * Space -> O(1);
         */
        this.#arr.push(data);
        this.upheapify(this.#arr.length - 1);
    }

    get() {
        /**
         * Time -> O(1);
         * Space -> O(1);
         */
        if (this.#arr.length > 0) {
            return this.#arr[0];
        }
        else {
            return undefined;
        }
    }

    remove() {
        /**
         * Time -> O(logn);
         * Space -> O(1);
         */
        // swap root with last element
        this.swap(0, this.#arr.length - 1);
        this.#arr.pop();
        this.downheapify(0);
    }

    display() {
        console.log(this.#arr);
    }
}

var MedianFinder = function () {
    this.maxheap = new Heap((a, b) => a > b)
    this.minheap = new Heap((a, b) => a < b)
    this.med = null;
}

function MedianFinder.prototype.addNum(num) {
    // size of maxheap == size of minheap
    // size of maxheap == 1 + size of minheap
    if (this.med == null) {
        // both heaps are empty
        this.maxheap.insert(num);
        this.med = num;
        return;
    } else {
        if (num < this.med) {
            this.maxheap.insert(num);
        } else {
            this.minheap.insert(num);
        }
    }

    if (this.minheap.size() > this.maxheap.size()) {
        let data = this.minheap.get();
        this.minheap.remove();
        this.maxheap.insert(data);
    }
    if (this.maxheap.size() > 1 + this.minheap.size()) {
        let data = this.maxheap.get();
        this.maxheap.remove();
        this.minheap.insert(data);
    }

    if (this.minheap.size() == this.maxheap.size()) {
        this.med = (this.minheap.get() + this.maxheap.get()) / 2;
        return;
    } else if (this.maxheap.size() == 1 + this.minheap.size()) {
        this.med = this.maxheap.get();
        return;
    }
}


//  return number
function MedianFinder.prototype.findMedian() {
    return this.med;
}
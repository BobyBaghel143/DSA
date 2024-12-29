// generatic heap code use  line ( 1 -> 98 )  
class Heap {
    #arr;
    constructor(cmp) {
        this.#arr = [];
        this.comparator = cmp;  // function 
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



function KthSmallestPrimeFraction(arr, k) {
    let hp = new Heap((a, b) => a.fraction < b.fraction);
    for (let i = 0; i < arr.length - 1; i++) {
        let f = arr[i] / arr[arr.length - 1];
        hp.insert({ fraction: f, num_idx: i, den_idx: arr.length - 1 });
    }
    for (let i = 0; i < k - 1; i++) {
        let curr = hp.get();
        hp.remove();
        let d = curr.den_idx;
        if (d - 1 < 0) continue;
        let n = curr.num_idx;
        let f = arr[n] / arr[d - 1];
        hp.insert({ fraction: f, num_idx: n, den_idx: d - 1 });
    }
    let curr = hp.get();
    let d = curr.den_idx;
    let n = curr.num_idx;
    return [arr[n], arr[d]];
}


let arr = [1, 2, 3, 5], k = 3;
console.log(KthSmallestPrimeFraction(arr, k))

/*
fractions = [ [1/5, 1/3,  1/2,  1/1]
            [2/5,   2/3,  2/2]
            [3/5,   3/3]
            [5/5]
       ]

  ans=[ 1/5,  1/3,  2/5,  1/2,  3/5,  2/3];       
       k=3;     then  [2/5]
*/
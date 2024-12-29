class MinHeap {
    #arr;
    constructor() {
        this.#arr = [];
    }

    swap(i, j) {
        let temp = this.#arr[i];
        this.#arr[i] = this.#arr[j];
        this.#arr[j] = temp;
    }

    upheapify(idx) {
        while (idx > 0) {
            let pi = Math.floor((idx - 1) / 2);
            if (this.#arr[idx] < this.#arr[pi]) {
                this.swap(idx, pi);
            }
            else {
                break;
            }
            idx = pi;
            // pi = idx;
        }
    }

    downheapify(idx) {
        while (idx < this.#arr.length) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let result = idx;
            if (left < this.#arr.length && this.#arr[left] > this.#arr[result]) {
                result = left;
            }
            if (right < this.#arr.length && this.#arr[right] > this.#arr[result]) {
                result = right;
            }

            // swap the idx with resutl;
            if (idx == result) {
                break;
            }
            this.swap(idx, result);
            idx = result;

        }
    }

    insert(data) {
        this.#arr.push(data);
        this.upheapify(this.#arr.length - 1);
    }

    get() {
        if (this.#arr.length > 0) {
            return this.#arr[0];
        }
        else {
            return undefined;
        }
    }

    remove() {
        this.swap(0, this.#arr.length - 1);
        this.#arr.pop();
        this.downheapify(0);
    }

    display() {
        console.log(this.#arr);
    }
}

const hp = new MinHeap();
// hp.insert(10);
// hp.insert(2);
// hp.insert(5);
// hp.insert(19);
// hp.insert(3);
// hp.insert(4);

hp.insert(1);
hp.insert(2);
hp.insert(3);
hp.insert(4);
hp.insert(5);
hp.insert(6);
hp.insert(7);

hp.display();

// hp.insert(20);;
// hp.display();

// hp.remove();
// hp.remove();
// hp.display();
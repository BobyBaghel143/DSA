// function heapify(inputArray) {

//     //Initialize Heap array
//     const heap = [];

//     MainLoop:
//     for (let element of inputArray) {

//         //Push value to end of heap
//         heap.push(element);

//         //If first element do nothing
//         if (!heap.length === 1) continue;

//         //Calculating initial n
//         let n = heap.length - 1;

//         InnerLoop:
//         while (n !== 0) {

//             //Calculate parent Index
//             const parentIndex = Math.floor((n - 1) / 2);

//             //If parent is greater than child, then all elements are in place
//             if (heap[parentIndex] > heap[n]) break InnerLoop;

//             //Swap parent with child
//             let temp = heap[parentIndex];
//             heap[parentIndex] = heap[n];
//             heap[n] = temp;

//             //parent becomes new n
//             n = parentIndex
//         }
//     }
//     return heap;
// }

// console.log(heapify([2, 7, 26, 25, 19, 17, 1, 90, 3, 36]))





function kthLargestElement(heap, k) {

    //Kth Value
    let kthMaxVal = null;

    //Swap Function
    const swap = (pos1, pos2) => {
        const temp = heap[pos1];
        heap[pos1] = heap[pos2];
        heap[pos2] = temp;
    }

    for (let i = 1; i <= k; i++) {

        //Step 1 : Max value in heap is the first element in array
        const maxVal = heap[0];

        //Step 2 : Replacing first element with last element
        const lastVal = heap.pop();

        //Edge condition to check if heap has only one element
        if (!heap.length) return maxVal;

        //Replace 0 with lastVal
        heap[0] = lastVal;

        let n = 0;

        //Step 4 : Reperat the process till node is in place
        while (n < heap.length) {

            //Step 3 : Set left and right child index
            const leftIndex = (2 * n) + 1;
            const rightIndex = (2 * n) + 2;

            //if it has no child
            if (leftIndex >= heap.length) break;

            //if only left child is present
            if (rightIndex >= heap.length) {

                //if child is less than node
                if (heap[leftIndex] < heap[n]) break;

                //if not swap
                swap(n, leftIndex);

                //set new child as current child
                n = leftIndex;
            } else {

                //get the highest child
                const highestIndex = (heap[leftIndex] > heap[rightIndex]) ? leftIndex : rightIndex;

                //if highest child is less than node
                if (heap[highestIndex] < heap[n]) break;

                //if not swap
                swap(n, highestIndex);

                //set newchild as current
                n = highestIndex;
            }
        }

        kthMaxVal = maxVal;
    }
    return kthMaxVal;
}


console.log(kthLargestElement([90, 36, 17, 25, 26, 7, 1, 2, 3, 19], 3))
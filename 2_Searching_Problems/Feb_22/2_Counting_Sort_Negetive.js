function counting_sort(arr) {
  // only non negetive integer
  let maxEl = -Infinity;
  let minEl = Infinity;
  for (let i = 0; i < arr.length; i++) {
    maxEl = Math.max(maxEl, arr[i]);
    minEl = Math.min(minEl, arr[i]);
  }

//   let freq = Array(maxEl - minEl + 1).fill(0);
  let freq = Array(maxEl - minEl + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    let currElement = arr[i] - minEl;
    freq[currElement]++;
  }
  // prefix sum
  for (let i = 1; i < freq.length; i++) {
    freq[i] = freq[i] + freq[i - 1];
  }
  // output arr
  let output = Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    let currElement = arr[i] - minEl;
    output[freq[currElement] - 1] = arr[i];
    freq[currElement]--;
  }
  return output;
}

let arr = [5, 4, -2, -3, -2, 1, 5, 4, -3];
console.log(counting_sort(arr));

/**
 * Time= O(n+k);
 * Space=O(K)
 */

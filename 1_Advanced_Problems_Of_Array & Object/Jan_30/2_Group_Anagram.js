var GroupAnagram = function (str) {
    let mp = {};
    for (let i = 0; i < str.length; i++) {
        /**
         * 1. Go to a string
         * 2. Sort the string
         * 3. Store in the mapping
         */
        let currStr = str[i];  // strings are immutable
        let sortedStr = currStr.split("").sort().join("");
        if (mp[sortedStr]) {
            // if the permutation is already in the map
            mp[sortedStr].push(currStr); // we can add curr string to the same group
        } else {
            // if the permutation is not  in the map
            mp[sortedStr] = [currStr];  // created a new group
        }
    }
    return Object.values(mp);
};

/**
 * To sort a string we first need to store all the char in an array
 * as arrays are mutable  we can sort he array
 * join the char of sorte array into a string
 */

let str = ["eat", "tea", "tan", "ate", "nat", "bat"];
// let strs=[""]
x = GroupAnagram(str);
console.log(x);


// Time : O(NKlogK) // k -> mac string length
// Space : O(NK)
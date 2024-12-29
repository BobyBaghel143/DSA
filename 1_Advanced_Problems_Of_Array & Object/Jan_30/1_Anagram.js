let Anagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    };

    // prepare mapping
    let mp = {};
    for (let i = 0; i < s.length; i++) {
        // process the first string s, and create the frequency map
        let curr = s[i];
        if (mp[curr]) {
            // curr char is present
            mp[curr]++;   // increment the frequency
        } else {
            mp[curr] = 1;  // make an entry of the curr char with freq 1
        }
    }

    for (let i = 0; i < t.length; i++) {
        // process the second string, and do reduction in map
        let curr = t[i];
        if (mp[curr]) {
            // if we found the char in mapping,
            mp[curr]--;    // reduce the freq
            if (mp[curr] == 0) delete mp[curr];  // if freq became 0, delete it 
        } else {
            // the curr char was not found, that means it is mismatch
            // there is character inside t which was not present indite s
            return false;    // not anagrams
        }
    }
    return Object.keys(mp).length == 0;  // Object.keys(map) -> give array of keys, if mp is empty this array is empty.
}

let s = "anagram", t = "nagaram";
x = Anagram(s, t);
console.log(x);

/**
    * Time :  O(N)
    * Space : O(1)
    */
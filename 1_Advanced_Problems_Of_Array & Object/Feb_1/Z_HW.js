/*
// diamond star
function upperTringle(n) {
   for (let row = 1; row <= n; row++) {
       let str = " "
       space = n - row;
       for (let j = 1; j <= space; j++) {
           str += " ";
       }

       let stars=row; 
       // let stars = 2 * row - 1;
       for (let col = 1; col <= stars; col++) {
           str += "* "
       }
       console.log(str);
   }
}
function lowerTringle(n) {
   for (let row = 1; row <= n; row++) {
       let str = " ";

       let space = row;
       for (let j = 1; j <= space; j++) {
           str += " ";
       }

       let stars = 2 * (n - row) /2;
       // let stars = 2 * (n - row) - 1;
       for (let col = 1; col <= stars; col++) {
           str += "* "
       }
       console.log(str);
   }
};
function pattern(n) {
   upperTringle(n);
   lowerTringle(n)
}
pattern(4);
*/



/*
// Reverse Array 
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [1, 2, 3, 4, 5];
let i = 0;
let j = arr.length - 1;
while (i <= j) {
    swap(arr, i, j)
    i++;
    j--;
}
console.log(arr);
*/







/*
    // Reverse string 

function swap(str, i, j) {
    let temp = str[i]
    str[i] = str[j];
    str[j] = temp;
}

let str = ["a", "b", "c", "d", "e"];
let i = 0;
let j = str.length - 1;
while (i <= j) {
    swap(str, i, j)
    i++;
    j--;
}
console.log(str);
*/



// function swap(s, i, j) {
//     let temp = s[i];
//     s[i] = s[j];
//     s[j] = temp;
// };
// let s = ["h", "e", "l", "l", "o"];
// let i = 0;
// let j = s.length - 1;
// while (i <= j) {
//     swap(s, i, j);
//     i++;
//     j--;
// }
// console.log(s);


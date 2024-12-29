/*    // half & full diamond
function upperTringle(n) {
    for (let row = 1; row <= n; row++) {
        let str = " ";
        space = n - row;
        for (let j = 1; j <= space; j++) {
            str += " ";
        }

        let stars = row;   
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

        let stars = (2 * (n - row))/2;
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




// // tribonacci
// function f(n) {
//     if (n == 0 || n == 1) {
//         return n;
//     }
//     return (f(n - 1) + f(n - 2));   //  fibonacci
// } 
// console.log(f(8));     



// const rows = parseInt(prompt("Enter number of rows: "));
// for (let i = 0; i < rows; i++) {
//     let pattern = "";
//     for (let j = 0; j <= i; j++) {
//         pattern += "*";
//     }
//     console.log(pattern);
// }



/*
function upperTringle(n) {
    for (let row = 1; row <= n; row++) {
        let str = " ";
        let space = n - row;
        for (let j = 1; j <= space; j++) {
            str += " ";
        };

        let stars = row;
        for (let col = 1; col <= stars; col++) {
            str += "* ";
        }
        console.log(str);
    }
}

function square(n) {
    for (let row = 1; row <= n; row++) {
        let str = " "

        for (let col = 1; col <= n; col++) {
            str += "* "
        }
        console.log(str);
    }
}

function lowerTringle(n) {
    for (let row = 1; row <= n; row++) {
        let str = " "
        let space = row;
        for (let j = 1; j <= space; j++) {
            str += " "
        }
        let star = (2 * (n - row)) / 2;
        for (let col = 1; col <= star; col++) {
            str += "* ";
        }
        console.log(str);
    }
}
function pattern(n) {
    upperTringle(n);
    square(2);
    lowerTringle(n)
}
pattern(4)
*/
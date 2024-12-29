let res = {}
let min = 0;
let max = 0;
function f(root, col) {
    if (root == null) return;

    if (!res[col]) {
        res[col] = [root.val];
    } else {
        res[col].push(root.val);
    }

    min = Math.min(min, col);
    max = Math.max(max, col);

    f(root.left, col - 1);
    f(root.right, col + 1);
}


function VerticalOrderTraversal(root) {
    res = {};
    min = Infinity;
    max = -Infinity;
    f(root, 0);
    const ans = [];
    for (min; min <= max; min++) {
        ans.push(res[min].sort((a, b) => a - b));
    }
    return ans;
}

// let root = {
//     data: 1,
//     left: {
//         data: 2,
//         left: {
//             data: 4,
//             left: null,
//             right: null,
//         }
//         right: {
//             data: 5,
//             left: null,
//             right: null
//         }
//     }
//     right: {
//         data: 3,
//         left: {
//             data: 6,
//             left: null,
//             right: null
//         }
//         right: {
//             data: 7,
//             left: null,
//             right: null,
//         }
//     }
// }

let root = [1, 2, 3, 4, 5, 6];
console.log(VerticalOrderTraversal(root));
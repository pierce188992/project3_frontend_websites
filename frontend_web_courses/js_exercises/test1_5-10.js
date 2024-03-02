// 5
// function position(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == str[i].toUpperCase()) {
//             console.log(str[i] + " " + i);
//             return str[i] + " " + i;
//         }
//     }
//     console.log(-1);
//     return -1;
// }

// position("abcd"); // prints -1
// position("AbcD"); // prints A 0
// position("abCD"); // prints C 2

// 6
// function findSmallCount(arr, n) {
//     let counter = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < n) {
//             counter++;
//         }
//     }
//     console.log(counter);
//     return counter;
// }

// findSmallCount([1, 2, 3], 2); // returns 1
// findSmallCount([1, 2, 3, 4, 5], 0); // returns 0
// findSmallCount([1, 2, 3, 4, 5], 5); // returns 4

// 7
// function findSmallerTotal(arr, n) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < n) {
//             total += arr[i];
//         }
//     }
//     console.log(total);
//     return total;
// }

// findSmallerTotal([1, 2, 3], 3); // returns 3
// findSmallerTotal([1, 2, 3], 1); // returns 0
// findSmallerTotal([3, 2, 5, 8, 7], 999); // returns 25
// findSmallerTotal([3, 2, 5, 8, 7], 0); // returns 0

// 8.1
// function stars(n) {
//     let star = "";
//     for (let i = 1; i <= n; i++) {
//         star += "*";
//         console.log(star);
//     }
// }

// stars(1);
// *
// stars(4);
// *
// **
// ***
// ****

// 9
// function stars2(n) {
//     for (let i = 1; i <= n; i++) {
//         // 製作出i個星星
//         let star = "";
//         for (let j = 1; j <= i; j++) {
//             star += "*";
//         }
//         console.log(star);
//     }
//     for (let i = n - 1; i >= 1; i--) {
//         // 製作出i個星星
//         let star = "";
//         for (let j = 1; j <= i; j++) {
//             star += "*";
//         }
//         console.log(star);
//     }
//     console.log("==========");
// }

// 10
function fib(n) {
    if (n == 0) {
        console.log(0);
        return 0;
    } else if (n == 1) {
        console.log(1);
        return 1;
    }

    let fib_sequence = [0, 1];
    while (fib_sequence.length <= n) {
        let last_element = fib_sequence[fib_sequence.length - 1];
        let second_last_element = fib_sequence[fib_sequence.length - 2];
        fib_sequence.push(last_element + second_last_element);
    }
    console.log(fib_sequence[fib_sequence.length - 1]);
    return fib_sequence[fib_sequence.length - 1];
}

fib(0); // returns 0
fib(1); // returns 1
fib(2); // returns 1
fib(3); // returns 2
fib(4); // returns 3
fib(5); // returns 5
fib(6); // returns 8
fib(8); // returns 21
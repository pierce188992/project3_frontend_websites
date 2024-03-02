// 1
// function printEvery3() {
//     for (let i = 1; i <= 88; i += 3) {
//         console.log(i);
//     }
// }

// printEvery3();

// 2
// function table9to9() {
//     for (let i = 1; i <= 9; i++) {
//         for (let j = 1; j <= 9; j++) {
//             console.log(i + " x " + j + " = " + i * j);
//         }
//     }
// }
// table9to9();

// 3.1
// function isUpperCase(str) {
//     if (str.length == 0) {
//         console.log(false);
//         return false;
//     }
//     if (str[0] == str[0].toUpperCase()) {
//         console.log(true);
//         return true;
//     } else {
//         console.log(false);
//         return false;
//     }
// }

// isUpperCase("ABCD"); // returns true
// isUpperCase(""); // returns false
// isUpperCase("aBCD"); // returns false

// 3.2
// function isUpperCase(str) {
//     if (str.length == 0) {
//         console.log(false);
//         return false;
//     }
//     return str[0] == str[0].toUpperCase();
// }
// isUpperCase("ABCD"); // returns true
// isUpperCase(""); // returns false
// isUpperCase("aBCD"); // returns false

// 4.1
// function isAllUpperCase(str) {
//     if (str.length == 0) {
//         console.log(false);
//         return false;
//     }

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] != str[i].toUpperCase()) {
//             console.log(false);
//             return false;
//         }
//     }

//     console.log(true);
//     return true;
// }

// isAllUpperCase("ABCD"); // returns true
// isAllUpperCase(""); // returns false
// isAllUpperCase("ABCDEFGHIJKLm"); // returns false

//4.2
// function isAllUpperCase(str) {
//     if (str.length == 0) {
//         console.log(false);
//         return false;
//     }

//     console.log(str == str.toUpperCase());
//     return str == str.toUpperCase();
// }

// isAllUpperCase("ABCD"); // returns true
// isAllUpperCase(""); // returns false
// isAllUpperCase("ABCDEFGHIJKLm"); // returns false
// 5
// function printStars(space, star) {
//     let result = "";
//     for (let i = 0; i < space; i++) {
//         result += " ";
//     }
//     for (let i = 0; i < star; i++) {
//         result += "*";
//     }
//     console.log(result);
// }

// function pyramid(n) {
//     let star = 1;
//     let space = n - 1;
//     while (space >= 0) {
//         printStars(space, star);
//         star += 2;
//         space -= 1;
//     }
//     console.log("=========");
// }

// pyramid(1);
// //*
// pyramid(2);
// //  *
// // ***
// pyramid(4);
// //    *
// //   ***
// //  *****
// // *******

// 6
// function printStars(space, star) {
//     let result = "";
//     for (let i = 0; i < space; i++) {
//       result += " ";
//     }
//     for (let i = 0; i < star; i++) {
//       result += "*";
//     }
//     console.log(result);
//   }

//   function inversePyramid(n) {
//     let star = 2 * n - 1;
//     let space = 0;
//     while (star > 0) {
//       printStars(space, star);
//       star -= 2;
//       space += 1;
//     }
//     console.log("=========");
//   }

//   inversePyramid(4);
//   // *******
//   //  *****
//   //   ***
//   //    * 


// 7
function primeFactor(n) {
    let answer = n + " = "; // 1200 =
    let p = 2;
    while (p <= n) {
        if (n % p == 0) {
            answer += p + " x "; // 1200 = 2 x
            n /= p; // n = n / p
        } else {
            p++;
        }
    }

    let answer2 = "";
    for (let i = 0; i < answer.length - 3; i++) {
        answer2 += answer[i];
    }
    console.log(answer2);
}

primeFactor(1200);
primeFactor(91); // 7 x 13
primeFactor(1001);

// 1200 = 2 x 2 x 2 x 2 x 3 x 5 x 5
// n / p
// 1200 / 2 = 600
// 600 / 2 = 300
// 300 / 2 = 150
// 150 / 2 = 75
// 75 / 3 = 25
// 25 / 5 = 5
// 5 / 5 = 1
// 1 / 5

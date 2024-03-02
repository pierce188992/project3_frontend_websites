// 1
// function mySort(arr) {
//     let workingIndex = arr.length - 1;
//     while (workingIndex >= 0) {
//         // 找出0到workingIndex中，元素的最大值
//         let biggest = arr[0];
//         let biggestIndex = 0;
//         for (let i = 0; i <= workingIndex; i++) {
//             if (arr[i] > biggest) {
//                 biggest = arr[i];
//                 biggestIndex = i;
//             }
//         }
//         // 將biggest與arr[workingIndex]元素交換
//         let temp = arr[biggestIndex];
//         arr[biggestIndex] = arr[workingIndex];
//         arr[workingIndex] = temp;

//         // 將workingIndex減去1
//         workingIndex--;
//     }
//     console.log(arr);
// }

// mySort([17, 0, -3, 2, 1, 0.5]); // returns [-3, 0, 0.5, 1, 2, 17]

// 2
// function distance(h, n) {
//     let result = h;
//     for (let i = 2; i <= n; i++) {
//         result += 2 * (h / Math.pow(2, i - 1));
//     }
//     return result;
// }

// console.log(distance(100, 4)); // 275
// console.log(distance(500, 7)); // 1484.375

// 3
// function PPDI() {
//     for (let i = 100; i <= 999; i++) {
//         let unit = i % 10; //個位數
//         let tens = Math.floor(i / 10) % 10; //十位數
//         let hundreds = Math.floor(i / 100) % 10; //百位數

//         let sum = Math.pow(unit, 3) + Math.pow(tens, 3) + Math.pow(hundreds, 3);
//         if (sum == i) {
//             console.log(i);
//         }
//     }
// }

// PPDI();

// 4

// const friends = ["John", "Mary", "Alex", "Steve", "carol"];
// for (let i = 0; i < friends.length / 2; i++) {
//     let temp = friends[i];
//     friends[i] = friends[friends.length - 1 - i];
//     friends[friends.length - 1 - i] = temp;
// }
// console.log(friends); // ["carol", "Steve", "Alex", "Mary", "John"]

//5
// function calc(a, n) {
//     let result = 0;
//     for (let i = 0; i < n; i++) {
//         for (j = 0; j <= i; j++) {
//             result += a * Math.pow(10, j);
//         }
//     }
//     console.log(result);
// }

// calc(2, 3); // 246
// calc(10, 6); // 1234560

// 6
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    console.log(array);
    return array;
}

shuffle([2, 11, 37, 42]); // 可能是[42, 22, 37, 2]
// 1
// function reverse(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         result += str[str.length - 1 - i];
//     }
//     console.log(result);
//     return result;
// }

// reverse("abcd"); // returns "dcba"
// reverse("I am a good guy."); // returns ".yug doog a am I"

// 2
// function swap(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == str[i].toUpperCase()) {
//             result += str[i].toLowerCase();
//         } else {
//             result += str[i].toUpperCase();
//         }
//     }
//     console.log(result);
//     return result;
// }

// swap("Aloha"); // returns "aLOHA"
// swap("Love you."); // returns "lOVE YOU."

// 3
// function isPrime(n) {
//     if (n == 1) {
//         return false;
//     }

//     let starter = 2;
//     while (starter < n) {
//         if (n % starter == 0) {
//             return false;
//         }
//         starter++;
//     }
//     return true;
// }

// console.log(isPrime(91));
// console.log(isPrime(21));
// console.log(isPrime(6252));
// console.log(isPrime(101));

// 4.1
// function palindrome(str) {
//     let i = 0;
//     let j = str.length - 1;
//     while (i < j) {
//         if (str[i] != str[j]) {
//             console.log(false);
//             return false;
//         }
//         i++;
//         j--;
//     }
//     console.log(true);
//     return true;
// }

// palindrome("bearaeb"); // true
// palindrome("whatever revetahw"); // true
// palindrome("Aloha, how are you today?"); // false

// 4.2
function reverse(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[str.length - 1 - i];
    }

    return result;
}

function palindrome(str) {
    console.log(str == reverse(str));
    return str == reverse(str);
}

palindrome("bearaeb"); // true
palindrome("whatever revetahw"); // true
palindrome("Aloha, how are you today?"); // false
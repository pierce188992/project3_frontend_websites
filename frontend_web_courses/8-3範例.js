const { performance } = require("perf_hooks"); // node.js

let startTime = performance.now();

for (let i = 0; i < 10000000; i++) {
  let a = new String("jakdsfjlkajlskdfjaksljfakls;dfja;ls");
}

let endTime = performance.now();
let timeDiff = endTime - startTime;
console.log("一千萬次的String wrapper object製作需要" + timeDiff);

startTime = performance.now();
for (let i = 0; i < 10000000; i++) {
  let a = "jakdsfjlkajlskdfjaksljfakls;dfja;ls";
}
endTime = performance.now();
timeDiff = endTime - startTime;
console.log("一千萬次的String宣告需要" + timeDiff);

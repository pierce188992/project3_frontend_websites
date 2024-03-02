//1
function give100(bool) {
    return new Promise((resolve, reject) => {
        bool ? resolve(100) : reject("false...");
    });
}

async function getValue(value) {
    let result = await give100(value);
    console.log(result);
}
getValue(true);

//2
function give100(bool) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            bool ? resolve(100) : reject("false...");
        }, 2000);
    });
}

console.log(give100(true));
function getData() {
    console.log("Working on the functions");
}


getData();
// console.log(isValidData());
console.log(isEvenOrOdd(9));



const data = function isValidData() {
    return "Validated";
}


function isEvenOrOdd(a) {
    return a % 2 == 0 ? "Even" : "Odd";
}

module.exports = { data }
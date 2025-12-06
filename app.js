// conditional statements
// if, if-else, if-else-if, switch

// control statements
// for, while, dowhile, break, continue

const fun = require('./fun');

let count = 0;

if (count == 0) {
    console.log("Zero");
} else if (count < 0) {
    console.log("Neg");
} else {
    console.log('Non Zero');
}

// switch
switch (count) {
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    default:
        console.log("Not a digit");

}

let list = ["5F5", "7744", "84035"];
// for

let i;

for (i = 0; i <= 5; i++) {
    console.log(`value ${i}`);
}

// while
while (i-- > 0) {
    console.log(`value ${i}`);
    if (i == 3) {
        continue;
    }
}

do {
    console.log(`value do while ${i}`);

} while (i-- > 0);




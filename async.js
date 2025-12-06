
function getName() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (true) {
                res("Vasanth");
            } else {
                rej("Error Message");
            }
        }, 2000);
    })
}



const main = async () => {
    try {
        console.log("Waiting");
        const name = await getName();
        console.log(name);
        console.log("Hi");
    } catch (error) {
        console.error(error);
    }
}

main()
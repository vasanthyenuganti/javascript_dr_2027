const getData = new Promise((reslove, reject) => {
    if (false) {
        reslove("data getted")
    } else {
        reject("Facing an error while data getting")
    }
})

getData.then((res) => {
    console.log(res);
}).catch((err) => {
    console.error(err);
});



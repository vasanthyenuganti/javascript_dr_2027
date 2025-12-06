function fun1(call) {
    console.log("Calling the function1");
    call()
}

function fun2() {
    console.log("Calling the function2");
}


fun1(fun2)
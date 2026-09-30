// setTimeout

// function sayHello(){
//     console.log("Hello, World!");
// };

// setTimeout(sayHello, 4000);
// let timerIdOne = setTimeout(sayHello, 4000);
// clearTimeout(timerIdOne);


// setInterval
// function sayHello(){
//     console.log("Hello, World!");
// };


// Clear Timer
// let timerId  = setInterval(sayHello, 2000);

// function clearTimer(){
//     clearInterval(timerId);
//     console.log("Timer Stopped");
// }
// setTimeout(clearTimer, 8000);



function runTask(){
    console.log("Good Morning!");

    setTimeout(()=> {
        console.log("Hello");
    }, 5000);

    setTimeout(()=> {
        console.log("Hello, World!");
    }, 0);

    console.log("Good Evening!");
}

runTask();
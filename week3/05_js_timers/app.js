console.log("is it working");
// messages
const msgOne = document.getElementById("msg-one");
const msgTwo = document.getElementById("msg-two");
const msgThree = document.getElementById("msg-three");
// buttons
const btnOne = document.getElementById("btn-one");
const btnTwo = document.getElementById("btn-two");
const btnThree = document.getElementById("btn-three");
// handlers
btnOne.addEventListener("click", () => {
    showHide(msgOne);
});
btnTwo.addEventListener("click", () => {
    showHide(msgTwo);
});
btnThree.addEventListener("click", () => {
    startStop(msgThree);
});

function hideMsg(msg) {
    msg.style.visibility = "hidden";
}

function setTimer(msg) {
    let timer = setTimeout(
        () => {
            hideMsg(msg);
        }, 5000
    );
}

function showHide(msg) {
    if (msg.style.visibility === "hidden") {
        msg.style.visibility = "visible";
        if (msg === msgTwo) {
            setTimer(msg);
        }
    } else {
        setTimer(msg);
    }
}

hideMsg(msgTwo);

// 🎯 Mini Challenge: Using setTimeout
// 🐿️ As a user, when I click a button, a message should display for 5 seconds to confirm the action occurred, before disappearing again.
//     Create an event handler that makes visible a message that is hidden by default
//     Use setTimeout to hide the message after 5 seconds

// 🎯 Mini Challenge: Using setInterval
// 🐿️ As a user, I want to click a button to start a timer, like a stopwatch. Pressing the button again to stop the timer.
//     Create an event handler that starts a timer when a button is clicked
//     Use setInterval to update the timer every second
//     Use clearInterval to stop the timer when the button is clicked again
// 💭 Help
// To stop the interval, you need a reference to the interval. Does the interval function have a return value we can use in combination with the clearInterval function.
let T;
function startStop(msg) {
    if (T) {
        clearInterval(T);
        btnThree.innerText = "start";
        T = null;
    } else {
        T = setInterval(
            () => {
                displaySeconds(msg);
            }, 1000
        );
        let i = 0;
        function displaySeconds(msg) {
            let seconds = ++i;
            msg.innerText = seconds;
            btnThree.innerText = "stop";
        }
    }
}





//     btnThree.removeEventListener("click", () => {
//         startTimer(msgThree);
//     });
//     btnThree.addEventListener("click", () => {
//         clearInterval(T);
//     });


// toggle button to clear / set interval
// clearInterval(T);




// countdown timer
var timeLeft = 60;
var timerEl = document.getElementById("timer");
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == 0){
        clearTimeout(timerId);
        //call up end

    } else {
        timerEl.innerHTML = timeLeft + " seconds remaining";
        timeLeft--;
        console.log(timeLeft.valueOf);
    }
}
document.getElementById("timer").textContent = timeLeft;

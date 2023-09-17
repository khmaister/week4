// start
var questionsEl = document.getElementById("questions");
var answersEl = document.getElementById("choices");

const startButton = document.createElement("button");
startButton.textContent = "START";
document.body.appendChild(startButton);

// countdown timer
var timeLeft = 10;
var timerEl = document.getElementById("timer");
startButton.addEventListener("click", () => {
    var timerId = setInterval(countdown, 1000);
    startButton.hidden = true;
    


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
});

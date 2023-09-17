// initial load
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var highscoreEl = document.getElementById("highscore");
var initialq = document.getElementById("initial-quote");
initialq.innerHTML = "You have 60 seconds to try to answer as many questions correct as possible and get the highest score. Every incorrect answer will deduct 4 seconds. Good luck!";
highscoreEl.innerHTML = "View Highscores";
var choiceAEl = document.getElementById("choiceA");
var choiceBEl = document.getElementById("choiceB");
var choiceCEl = document.getElementById("choiceC");
var choiceDEl = document.getElementById("choiceD");
var ans = document.getElementById("answer-result");
//document.getElementById("choiUl").style.visibility = false;


// start button
const startButton = document.createElement("button");
startButton.textContent = "START";
document.body.appendChild(startButton);
// countdown timer

var timerEl = document.getElementById("timer");
var timer1 = 60;


function timeReduce(){
    timer1 = timer1 - 4;

}
startButton.addEventListener("click", () => {
    var timerId = setInterval(countdown, 1000);
    console.log("quiz started");
    startButton.hidden = true;
    initialq.innerHTML = "";
    highscoreEl.innerHTML = "";
    random();
    
    
    function countdown() {
        timerEl.innerHTML = timer1 + " seconds remaining";
        if (timer1 == 0){
            clearTimeout(timerId);
            addScore();

        } else {          
            timer1--;           
            //questionsEl.innerHTML = que1; 
            ;      
        }
    }
});
// questions and answers
function que1(){
    questionsEl.innerHTML = 'Which of the following is not a front-end technology?';
    //choiceAEl = {name: "A. HTML", answer: false,};
    choiceAEl.innerHTML = "A. HTML";
    choiceAEl.addEventListener("click", ()=> {
        console.log("clickable");
        ans.innerHTML = "incorrect";
        timeReduce();
    })
    //choiceBEl = {name: "B. CSS", answer: false,};
    choiceBEl.innerHTML = "B. CSS";
    choiceBEl.addEventListener("click", ()=> {
        console.log("clickable");
        ans.innerHTML = "incorrect";
        timeReduce();
    })
    //choiceCEl = {name: "C. JavaScript", answer: false,}
    choiceCEl.innerHTML = "C. Javascript";
    choiceCEl.addEventListener("click", ()=> {
        console.log("clickable");
        ans.innerHTML = "incorrect";
        timeReduce();
    })
    //choiceDEl = {name: "D. SQL", answer: true,}*/
    choiceDEl.innerHTML = "D. SQL";
    choiceDEl.addEventListener("click", ()=> {
        console.log("clickable");
        ans.innerHTML = "correct";
        random();
    })
    
}
function que2(){
    questionsEl.innerHTML = 'Amongst which of the following programming language is used as a server-side language?';
    choiceAEl.innerHTML = "A. Pyhton";
    choiceAEl.addEventListener("click", ()=> {
        console.log("clickable");
        ans.innerHTML = "incorrect";
        timeReduce();
    })
    choiceBEl.innerHTML = "B. C++";
    choiceBEl.addEventListener("click", ()=> {
        console.log("clickable");
        ans.innerHTML = "incorrect";
        timeReduce();
    })
    choiceCEl.innerHTML = "C. Javascript";
    choiceCEl.addEventListener("click", ()=> {
        console.log("clickable");
        ans.innerHTML = "incorrect";
        timeReduce();
    })
    //choiceDEl = {name: "D. SQL", answer: true,}*/
    choiceDEl.innerHTML = "D. Both A and B";
    choiceDEl.addEventListener("click", ()=> {
        console.log("clickable");
        ans.innerHTML = "correct";
        random();
    })
}

// clear all fields
function cleanSlate(){
    questionsEl.innerHTML = "";
    choicesEl.innerHTML = "";
    initialq.innerHTML = "";    
    choiceAEl.innerHTML = "";
    choiceBEl.innerHTML = "";
    choiceCEl.innerHTML = "";
    choiceDEl.innerHTML = "";
    ans.innerHTML = "";
    
}




// highscore results
function scores(){
    cleanSlate();
    initialq.innerHTML = "Highscores";
}

//adding score
function addScore(){
    cleanSlate();
    initialq.innerHTML = "Your score is " ;
    startButton.hidden = false;
    highscoreEl.innerHTML = "Highscores";

}

function random(){
    let variable = Math.floor((Math.random()*2)+1);
    console.log(variable);
    if(variable == 1){
        que1();
    }else if(variable == 2){
        que2();
    }
}

/* populate question area
function populate(){
    if(variable = 0)

}*/







// clickable 
highscoreEl.addEventListener("click", ()=> {
    console.log("clickable");
    scores();
})

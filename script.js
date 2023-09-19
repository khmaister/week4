// initial load
var userScore = 0;
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var highscoreEl = document.getElementById("highscore");
var initialq = document.getElementById("initial-quote");
initialq.innerHTML = "You have 30 seconds to try to answer as many questions correct as possible and get the highest score. Every incorrect answer will deduct 10 seconds. Good luck!";
var choiceAEl = document.getElementById("choiceA");
var choiceBEl = document.getElementById("choiceB");
var choiceCEl = document.getElementById("choiceC");
var choiceDEl = document.getElementById("choiceD");
var ans = document.getElementById("answer-result");
var inputEl = document.getElementById("imput");
var popVal = 0;
var userInitials = document.getElementById("initials");
highscoreEl.innerHTML = "View Highscores";
highscoreEl.addEventListener("click",() =>{
    scores();
})
var userScoreEl = {
    userInitials: "",
    score:"",
};

// start button
const startButton = document.createElement("button");
startButton.textContent = "START";
document.body.appendChild(startButton);

// submit button
const submitButton = document.createElement("button");
submitButton.textContent = "Submit";
document.body.appendChild(submitButton);
submitButton.hidden = true;

//input field
var inputField = document.getElementById("input-field");
inputField.hidden = true;

// countdown timer
var timerEl = document.getElementById("timer");
var timer1 = 30;
if (timer1 == 0){
    addScore();
}

//incorrect answer effect
function timeReduce(){
    timer1 = timer1 - 10;
}
// quiz start
startButton.addEventListener("click", () => {
    var timerId = setInterval(countdown, 1000);
    console.log("quiz started"); 
    function countdown() {
        timerEl.innerHTML = timer1 + " seconds remaining";
        if (timer1 <= 0){
            clearTimeout(timerId);
            addScore();
        } else {          
            timer1--;    
        }
    }
    startButton.hidden = true;
    submitButton.hidden= true;
    initialq.innerHTML = "";
    highscoreEl.innerHTML = "";
    popVal=0;
    populate();
    timer1 = 30;
    userScore = 0;
    inputField.hidden = true;
});

// questions and answers
function que1(){
    questionsEl.innerHTML = 'Which of the following is not a front-end technology?';
    
    const que1Abutton = document.createElement("choiceA");
    que1Abutton.textContent = "A. HTML";
    que1Abutton.addEventListener("click", () => {
        timeReduce();
        ans.innerHTML = "incorrect";
        console.log("clickable");
    })
    const que1Bbutton = document.createElement("choiceB");
    que1Bbutton.textContent = "B. Css";
    que1Bbutton.addEventListener("click", () => {
        timeReduce();
        ans.innerHTML = "incorrect";
        console.log("clickable");
    })
    const que1Cbutton = document.createElement("choiceC");
    que1Cbutton.textContent = "C. JavaScript";
    que1Cbutton.addEventListener("click", () => {
        timeReduce();
        ans.innerHTML = "incorrect";
        console.log("clickable");
    })
    const que1Dbutton = document.createElement("choiceD");
    que1Dbutton.textContent = "D. SQL";
    que1Dbutton.addEventListener("click", () => {
        ans.innerHTML = "correct";
        console.log("clickable");
        populate();
        userScore = userScore + timer1;
    })
    if (popVal==1){
    document.getElementById("choiceA").appendChild(que1Abutton);
    document.getElementById("choiceB").appendChild(que1Bbutton);
    document.getElementById("choiceC").appendChild(que1Cbutton);
    document.getElementById("choiceD").appendChild(que1Dbutton);
    }
}

function que2(){
    questionsEl.innerHTML = 'What is Git?';
    
    const que2Abutton = document.createElement("choiceA");
    que2Abutton.textContent = "A. Framework";
    que2Abutton.addEventListener("click", () => {
        timeReduce();
        ans.innerHTML = "incorrect";
        console.log("clickable");
    })
    const que2Bbutton = document.createElement("choiceB");
    que2Bbutton.textContent = "B. Version control system";
    que2Bbutton.addEventListener("click", () => {
        populate();
        ans.innerHTML = "correct";
        console.log("clickable");
        userScore = userScore + timer1;
    })
    const que2Cbutton = document.createElement("choiceC");
    que2Cbutton.textContent = "C. Database";
    que2Cbutton.addEventListener("click", () => {
        timeReduce();
        ans.innerHTML = "incorrect";
        console.log("clickable");
    })
    const que2Dbutton = document.createElement("choiceD");
    que2Dbutton.textContent = "D. Package manager";
    que2Dbutton.addEventListener("click", () => {
        ans.innerHTML = "incorrect";
        console.log("clickable");
        timeReduce();
    })
    document.getElementById("choiceA").appendChild(que2Abutton);
    document.getElementById("choiceB").appendChild(que2Bbutton);
    document.getElementById("choiceC").appendChild(que2Cbutton);
    document.getElementById("choiceD").appendChild(que2Dbutton);
    
}

function que3(){
    questionsEl.innerHTML = 'In an HTML document, which tag is used to add JavaScript code?';
    
    const que3Abutton = document.createElement("choiceA");
    que3Abutton.textContent = "A. <javascript>";
    que3Abutton.addEventListener("click", () => {
        timeReduce();
        ans.innerHTML = "incorrect";
        console.log("clickable");
    })
    const que3Bbutton = document.createElement("choiceB");
    que3Bbutton.textContent = "B. <js>";
    que3Bbutton.addEventListener("click", () => {
        timeReduce();
        ans.innerHTML = "incorrect";
        console.log("clickable");
    })
    const que3Cbutton = document.createElement("choiceC");
    que3Cbutton.textContent = "C. <script>";
    que3Cbutton.addEventListener("click", () => {
        populate();
        ans.innerHTML = "correct";
        console.log("clickable");
        userScore = userScore + timer1
    })
    const que3Dbutton = document.createElement("choiceD");
    que3Dbutton.textContent = "D. <java>";
    que3Dbutton.addEventListener("click", () => {
        ans.innerHTML = "incorrect";
        console.log("clickable");
        timeReduce();
    })
    document.getElementById("choiceA").appendChild(que3Abutton);
    document.getElementById("choiceB").appendChild(que3Bbutton);
    document.getElementById("choiceC").appendChild(que3Cbutton);
    document.getElementById("choiceD").appendChild(que3Dbutton);
    
}

function que4(){
    questionsEl.innerHTML = 'Which of the following is an array method in JavaScript?';
    
    const que4Abutton = document.createElement("choiceA");
    que4Abutton.textContent = "A. map";
    que4Abutton.addEventListener("click", () => {
        timeReduce();
        ans.innerHTML = "incorrect";
        console.log("clickable");
    })
    const que4Bbutton = document.createElement("choiceB");
    que4Bbutton.textContent = "B. every";
    que4Bbutton.addEventListener("click", () => {
        timeReduce();
        ans.innerHTML = "incorrect";
        console.log("clickable");
    })
    const que4Cbutton = document.createElement("choiceC");
    que4Cbutton.textContent = "C. reduce";
    que4Cbutton.addEventListener("click", () => {
        timeReduce();
        ans.innerHTML = "incorrect";
        console.log("clickable");
    })
    const que4Dbutton = document.createElement("choiceD");
    que4Dbutton.textContent = "D. all of the above";
    que4Dbutton.addEventListener("click", () => {
        ans.innerHTML = "correct";
        console.log("clickable");
        populate();
        userScore = userScore +timer1
    })
    document.getElementById("choiceA").appendChild(que4Abutton);
    document.getElementById("choiceB").appendChild(que4Bbutton);
    document.getElementById("choiceC").appendChild(que4Cbutton);
    document.getElementById("choiceD").appendChild(que4Dbutton);
    
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
    timer1 = 0, false;
}
function removeListeners(){
    choiceAEl.innerHTML = "";
    choiceBEl.innerHTML = "";
    choiceCEl.innerHTML = "";
    choiceDEl.innerHTML = "";
}


// highscore results
function scores(){
    cleanSlate();
    initialq.innerHTML = "Highscores";
    inputField.hidden = true;
    submitButton.hidden = true;
    var scoreRecall = JSON.parse(localStorage.getItem("userScore"));
    

    questionsEl.innerHTML = scoreRecall.userInitials +" "+scoreRecall.score;
    
    //console.log();
    
}
function getVal(){
    const val = document.querySelector("#initials").value;
    console.log(val);
    return val;
}
//adding score
function addScore(){
    cleanSlate();
    initialq.innerHTML = "Your score is " + userScore ;
    startButton.hidden = false;
    highscoreEl.innerHTML = "Highscores";
    submitButton.hidden = false;
    inputField.hidden = false;
    
    submitButton.addEventListener("click", () => {
        
        //select initials input, grab value and set to userScoreEl.userInitials
        userScoreEl.userInitials =  getVal();
        //set value userScore on userScoreEl.score
        userScoreEl.score = userScore;

        localStorage.setItem("userScore",JSON.stringify(userScoreEl));
        console.log(userScoreEl);
        scores();

    })
}
// call questions
function populate(){
    console.log("pop")
    if (popVal == 0){
        popVal = popVal + 1;       
        que1();        
    } else if(popVal == 1){  
        removeListeners();     
        popVal = popVal+1;
        que2();
    } else if(popVal == 2){ 
        removeListeners();       
        popVal = popVal+1;
        que3();
    } else if(popVal == 3){  
        removeListeners();      
        popVal = popVal+1;
        que4();
    }else {
        addScore();
    }
}


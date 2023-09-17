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
highscoreEl.addEventListener("click",() =>{
    scores();
})
// start button
const startButton = document.createElement("button");
startButton.textContent = "START";
document.body.appendChild(startButton);
// countdown timer

var timerEl = document.getElementById("timer");
var timer1 = 0;


function timeReduce(){
    timer1 = timer1 - 4;
}

startButton.addEventListener("click", () => {
    var timerId = setInterval(countdown, 1000);
    console.log("quiz started");
    startButton.hidden = true;
    initialq.innerHTML = "";
    highscoreEl.innerHTML = "";
    populate();
    timer1 = 60;
    
    
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
        populate();
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
        populate();
    })
}
function que3(){
    questionsEl.innerHTML = 'What is Git?';
    choiceAEl.innerHTML = "A. Framework";
    choiceAEl.addEventListener("click", ()=> {
        console.log("clickable");
        ans.innerHTML = "incorrect";
        timeReduce();
    })
    choiceBEl.innerHTML = "B. Version control system";
    choiceBEl.addEventListener("click", ()=> {
        console.log("clickable");
        ans.innerHTML = "correct";
        populate();
        
    })
    choiceCEl.innerHTML = "C. Database";
    choiceCEl.addEventListener("click", ()=> {
        console.log("clickable");
        ans.innerHTML = "incorrect";
        timeReduce();
    })
    choiceDEl.innerHTML = "D. Package manager";
    choiceDEl.addEventListener("click", ()=> {
        console.log("clickable");
        ans.innerHTML = "incorrect";
        timeReduce();
    })
}
function que4(){
    questionsEl.innerHTML = 'Amongst which of the follwing protocol is used to exchange the data between client and server?';
    choiceAEl.innerHTML = "A. HTTP";
    choiceAEl.addEventListener("click", ()=> {
        console.log("clickable");
        ans.innerHTML = "correct";
        populate();
    })
    choiceBEl.innerHTML = "B. TCP/IP";
    choiceBEl.addEventListener("click", ()=> {
        console.log("clickable");
        ans.innerHTML = "incorrect";
        timeReduce();
        
    })
    choiceCEl.innerHTML = "C. SMTP";
    choiceCEl.addEventListener("click", ()=> {
        console.log("clickable");
        ans.innerHTML = "incorrect";
        timeReduce();
    })
    choiceDEl.innerHTML = "D. FTP";
    choiceDEl.addEventListener("click", ()=> {
        console.log("clickable");
        ans.innerHTML = "incorrect";
        timeReduce();
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
    timer1 = 0;
    done1 = false;
    done2 = false;
    done3 = false;
    done4 = false;
    
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
/*var variable = 0;
function random(){
    let variable = Math.floor((Math.random()*2)+1);
    console.log(variable);
    populate();

}*/

// populate question area
var done1 = false;
var done2 = false;
var done3 = false;
var done4 = false;
function populate(){
    console.log("pop")
    if (done1 == false){
        done1 = true;
        que1();        
    } else if(done2 == false){        
        done2 = true;
        que2();
    } else if(done3 == false){        
        done3 = true;
        que3();
    } else if(done4 == false){        
        done4 = true;
        que4();
    }else {
        addScore();
    }
}
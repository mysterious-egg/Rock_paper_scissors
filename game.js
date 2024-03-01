let userImg = document.getElementById("move")
let compImg = document.getElementById("compMove")
let random;
function randomHand() {
    random = Math.floor(Math.random() * 3) + 1;

    if (random === 1) {
        compImg.setAttribute("src", "./assets/paper-hand.png");
    } else if (random === 2) {
        compImg.setAttribute("src", "./assets/rock-hand.png");
    } else if (random === 3) {
        compImg.setAttribute("src", "./assets/scissors-hand.png");
    }
}

let paper = document.getElementById("paper-logo")
let rock = document.getElementById("rock-logo")
let scissors = document.getElementById("scissors-logo")
let playerScore = document.getElementById("playerScore");
let compScore = document.getElementById("compScore");
let playerScoreVal = 0;
let compScoreVal = 0;
let result = document.getElementById("matchResult");
let playAgain = document.getElementById("playAgain");

paper.onclick = () =>{
    randomHand()
    userImg.setAttribute("src", "./assets/paper-hand.png");
    if (random == 2){
        playerScoreVal++
        playerScore.textContent = playerScoreVal 
    }
    if (random == 3){
        compScoreVal++
        compScore.textContent = compScoreVal
    }
    check()
}

rock.onclick = () =>{
    randomHand()
    userImg.setAttribute("src", "./assets/rock-hand.png");
    if (random == 3){
        playerScoreVal++
        playerScore.textContent = playerScoreVal 
    }
    if (random == 1){
        compScoreVal++
        compScore.textContent = compScoreVal
    }
    check()
}

scissors.onclick = () =>{
    randomHand()
    userImg.setAttribute("src", "./assets/scissors-hand.png");
    if (random == 1){
        playerScoreVal++
        playerScore.textContent = playerScoreVal 
    }
    if (random == 2){
        compScoreVal++
        compScore.textContent = compScoreVal
    }
    check()
}

function check(){
    if (playerScoreVal == 5 || compScoreVal == 5){
        rock.style.visibility = "hidden";
        paper.style.visibility = "hidden";
        scissors.style.visibility = "hidden";
    }

    if (playerScoreVal == 5){
        result.textContent = "Player won the match!"
        playAgain.style.visibility = "visible";
    }

    if (compScoreVal == 5){
        result.textContent = "Computer won the match!"
        playAgain.style.visibility = "visible";
    }
}

playAgain.onclick = () =>{
    window.open("index.html", "_self")
}
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const restartBtn = document.querySelector(".restartBtn");
let msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#userScore");
let compScorePara = document.querySelector("#compScore");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randInd];
}

const darwGame = () => {
    msg.innerText = "Game was Draw! Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //Generate Computer Choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        //Draw Game
        darwGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

restartBtn.addEventListener("click", () => {
    userScorePara.innerText = 0;
    compScorePara.innerText = 0;
    userScore = 0;
    compScore = 0;
    msg.innerText = "Play your move!";
    msg.style.backgroundColor = "#081b31";
});
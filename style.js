console.log("Hello World");

let getComputerChoice = function() {
    let randomNum = Math.floor(Math.random() * 10);

    if (randomNum == 0 || randomNum == 1 || randomNum == 2) {
        return "rock";
    }
    else if (randomNum == 3 || randomNum == 4 || randomNum == 5) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// console.log(getComputerChoice());

let getHumanChoice = function() {
    let choice = prompt("Choose 'Rock', 'Paper' or 'Scissors':");
    choice = choice.toLowerCase();
    if (choice == "rock") {
        return choice;
    }
    else if (choice == "paper") {
        return choice;
    }
    else if (choice == "scissors") {
        return choice;
    }
    else {
        alert("Only enter rock, paper or scissors");
    }
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

let playRound = function(human_choice, computer_choice) {
    if(computer_choice == "rock" && human_choice == "paper") {
        humanScore++;
        return console.log("You win!Paper beats Rock");
    }
    else if(computer_choice == "rock" && human_choice == "scissors") {
        computerScore++;
        return console.log("You lose!Rock beats Scissors");
    }
    else if(computer_choice == "paper" && human_choice == "rock") {
        computerScore++;
        return console.log("You lose!Paper beats Rock");
    }
    else if(computer_choice == "paper" && human_choice == "scissors") {
        humanScore++;
        return console.log("You win!Scissors beat paper");
    }
    else if(computer_choice == "scissors" && human_choice == "paper") {
        computerScore++;
        return console.log("You lose!Scissors beat paper");
    }
    else if(computer_choice == "scissors" && human_choice == "rock") {
        humanScore++;
        return console.log("You win!Rock beats Scissors");
    }
    else {
        return console.log("No one wins");
    }
}

let playGame = function() {
    for(let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
}

playGame();
function getComputerChoice(){
    let num =  Math.floor(Math.random() * 3)+1;
    let hand;
    switch(num){
        case 1:
            hand = "rock";
            break;
        case 2:
            hand = "paper";
            break;
        case 3:

            hand = "scissors";
            break;
        default:
            break;
    }
    return hand;
}
function getHumanChoice(){
    while (true){
        let hand = prompt("Choose Rock Paper or Scissors").toLowerCase();
        if (hand === "rock" || hand === "paper" || hand == "scissors"){
            return hand;
        }
    }
   
}
function playRound(human , computer, humanScore, computerScore){
    if (human === computer){
        console.log("Draw! Nobody wins points");
    }
    else if(human === "rock"){
        if (computer==="paper"){
            console.log("You Lose! Paper beats rock!");
            return false;;
        }
        else{
            console.log("You Win! Rock beats scissors!");
            return true;

        }
    }
    else if (human === "paper")
        if (computer === "rock"){
            console.log("You Win! Paper beats rock!");
            return true;

        }
        else{
            console.log("You Lose! Scissors beats paper!");
        }
    else{
        if (computer === "rock"){
            console.log("You lose! Rock beats scissors!");
            return false;;

        }
        else{
            console.log("You Win! Scissors beats paper");
            return true;
        }
    }

}

function playGame(){

let humanScore = 0;
let computerScore = 0;
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
for (let i = 0; i < 5; i++){
    let game = playRound(getHumanChoice(), getComputerChoice(), humanScore, computerScore);
    if (game){
        humanScore+= 1;
    }
    else{
        computerScore += 1;
    }
}
if (humanScore === computerScore){
    console.log("Draw!");
}
else if (humanScore > computerScore){
    console.log("You win");
}
else{
    console.log("You lose");
}


}
playGame();
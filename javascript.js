
function getComputerChoice(){
  let words = ['ROCK','PAPER','SCISSORS'];//make an array of the words to choose from
  let randomInt = getRandomInt(0, words.length - 1);//return a whole number randomly between the indexes of array   
  return words[randomInt];//return that random word at that index
}

function getRandomInt(min, max){//calculating random number from min(inclusive) and max(inlusive)
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function giveResult(playerSelection , computerSelection){

  if(playerSelection.toUpperCase() == computerSelection){
    console.log("DAMN ! that's a draw");
    return 0;
  }

  if(playerSelection.toUpperCase() == "ROCK")
  {
    if(computerSelection == "PAPER"){
      console.log("You Lose! Paper beats Rock");
      return computer++;
    }

    else{
      console.log("You Win! Rock beats Scissors");
      return player++;
    }
  }

  if(playerSelection.toUpperCase() == "PAPER")
  {
    if(computerSelection == "SCISSORS"){
      console.log("You Lose! Scissors beats Paper");
      return computer++;
    }

    else{
      console.log("You Win! Paper beats Rock");
      return player++;
    }
  }
  
  if(playerSelection.toUpperCase() == "SCISSORS")
  {
    if(computerSelection == "ROCK"){
      console.log("You Lose! Rock beats Scissors");
      return computer++;
    }

    else{
      console.log("You Win! Scissors beats Paper");
      return player++;
    }
  }

  else{
    console.log("Please enter correct value");
    return -1;
  }
 }

let computer = 0;
let player = 0 ;
function game(){ //making the 5 rounds for the game
  for(let i=1;i<= 5;i++)
  {
     let playerSelection = prompt('Enter your choice');//taking the input from user through a prompt here
     let computerSelection = getComputerChoice();//calling computers random choice
     console.log ("ROUND NUMBER :",i);
     console.log ("player :",playerSelection.toLowerCase());//printing player's value to console
     console.log ("computer :",computerSelection.toLowerCase());//printing computer's value to console
     giveResult(playerSelection , computerSelection);//takes the result for one round
  }

  if(computer > player)
  return ("\nOh No! You Loose");

  if(player > computer)
  return ("\nGreat Job! You Won");

  else
  return ("\nDamn Boi! It's a Draw");
}

console.log (game());

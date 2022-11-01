function getComputerChoice(){
  let words = ['Rock','Paper','Scissors'];//make an array of the words to choose from
  let randomInt = getRandomInt(0, words.length - 1);//return a whole number randomly between the indexes of array   
  return words[randomInt];//return that random word at that index
}

function getRandomInt(min, max){//calculating random number from min(inclusive) and max(inlusive)
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}


function giveResult(playerSelection , computerSelection){

   
}

const playerSelection = prompt('Enter your choice');
const computerSelection = getComputerChoice();

console.log (computerSelection);


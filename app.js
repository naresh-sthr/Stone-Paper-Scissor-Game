let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll('.choice');
let playTurn = document.querySelector('#playTurn');

let compChoice = () =>{
  let options = ["rock", "paper", "scissors"];
  let randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

const draw = ()=>{
  console.log("Match is Draw");
  playTurn.innerText = "Match is Draw";
  playTurn.style.backgroundColor = "#3d3d3d";
}

const showWinner = (userWin, userChoice, computerChoice) =>{
  if(userWin){
    playTurn.innerText = `You win ! ${userChoice} beats ${computerChoice}`
    playTurn.style.backgroundColor = "green"
    userScore++;
    document.querySelector('#user-score').innerText = userScore;

  }
  else{
    playTurn.innerText = `You Loose ! ${computerChoice} beats ${userChoice}`
    playTurn.style.backgroundColor = "red"
    compScore++;
    document.querySelector('#comp-score').innerText = compScore;
  }
}

const playGame = (userChoice)=>{
  console.log('user choice', userChoice);
  let computerChoice = compChoice();
  console.log('Computer Choice', computerChoice);

  if(userChoice === computerChoice){
    draw();
  }else{
    let userWin = true;
    if(userChoice === "rock"){
      //paper, scissor
      userWin = computerChoice === "paper" ? false : true ;
    }
    else if(userChoice === "paper"){
      //rock. scissor
      userWin = computerChoice === "rock" ? true : false;
    }
    else{
      //rock,paper
      userWin = computerChoice === "rock" ? false : true ;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
  
}

choices.forEach((choice)=>{
  choice.addEventListener('click',()=>{
    let userChoice = choice.getAttribute('id');
    playGame(userChoice)
  })
})
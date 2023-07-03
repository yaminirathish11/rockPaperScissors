//const prompt=require("prompt-sync")({sigint:true});

function Play() {
  let question = prompt("Shall we play Rock,Paper,Scissors ?");
  //console.log(question);
  if (question === null || question === undefined) {
    console.log("You have to enter something");
    return; // if pressed cancel in prompt
  }
  if (question.length) {
    //console.log(question);
    let player = question.toLowerCase();
    console.log("player :" + player);
    if (player === "rock" || player === "paper" || player === "scissors") {
      let arr = ["rock", "paper", "scissors"];
      let opponent = arr[Math.floor(Math.random() * (arr.length - 1))];
      console.log(" opponent :" + opponent);
      if (player === opponent) {
        alert("the game is a tie");
      } else if (
        (player === "rock" && opponent === "paper") ||
        (player === "paper" && opponent === "scissors") ||
        (player === "scissors" && opponent === "rock")
      ) {
        alert("Opponent won");
      } else if (
        (player === "rock" && opponent === "scissors") ||
        (player === "paper" && opponent === "rock") ||
        (player === "scissors" && opponent === "paper")
      ) {
        alert("You won");
      }
    } else {
      console.log("enter anything from rock,paper or scissors");
    }
  } else {
    console.log("you didn't enter anything");
  }
}
Play();

class Computer {
  constructor() {
    this.computerOrder = [];
    this.computerTurn = true;
    this.turn = 1;
    this.flash =0;
    this.computerFlashing = false;
  }

  createComputerOrder() {
    var options = ["1", "2", "3", "#","9","8","5","4","6","$","7","@"]
    for (var i = 0; i < 20; i++) {
      var index = Math.floor(Math.random() * options.length);
      this.computerOrder.push(options[index]);
    }
    console.log(this.computerOrder);
  }

  flashCards() {
      if (this.computerFlashing) {
        return;
      }

      this.computerFlashing = true;
    //console.log("flashcard called");

   
      //alert("flash is "+ this.flash);
      var i = 0;
      var number = setInterval(() => {

        if (i > this.flash) {
          clearInterval(number);
          this.computerFlashing = false;
          this.flash++;
          return;
        }

        console.log(i, this.computerOrder[i])

        
        if (this.computerOrder[i] === "1") {
          console.log("first if statement entered");
          numberOne.style.backgroundColor = "lightblue";
        
        }
      
      
        if (this.computerOrder[i] === "2") {
          numberTwo.style.backgroundColor = "lightblue";
       }
      
      
        if (this.computerOrder[i] === "3") {
          numberThree.style.backgroundColor = "lightblue";
      }
      
      
      
        if (this.computerOrder[i] === "4") {
          numberFour.style.backgroundColor = "lightblue";
        }
      
      
        if (this.computerOrder[i] === "5") {
          numberFive.style.backgroundColor = "lightblue";
      }
      
      
        if (this.computerOrder[i] === "6") {
          numberSix.style.backgroundColor = "lightblue";
    }
      
        
        if (this.computerOrder[i] === "7") {
           numberSeven.style.backgroundColor = "lightblue";
      }
      
        
        if (this.computerOrder[i] === "8") {
        numberEight.style.backgroundColor = "lightblue";
   }
      
        
        if (this.computerOrder[i] === "9") {
          numberNine.style.backgroundColor = "lightblue";
        }
      
        
         if (this.computerOrder[i] === "#" ) {
     
           numberTen.style.backgroundColor = "lightblue";
         }
      
        
         if (this.computerOrder[i] === "@") {
        
           numberEleven.style.backgroundColor = "lightblue";
         }
      
        
         if (this.computerOrder[i] === "$") {
       
           numberTwelve.style.backgroundColor = "lightblue";
         }
         i++;
         
      setTimeout(function () {
        clearColor();
      }, 666)

},1000);

}
}


  

var computer = new Computer();

class Player {
  constructor() {
    this.score = 0;
    this.playerTurn = false;
    this.playerOrder = [];
    this.good=true;
    this.win=false;
  }
}

var player = new Player();

var turnCounter = document.querySelector("#score");
var numberOne = document.querySelector("#one");
var numberTwo = document.querySelector("#two");
var numberThree = document.querySelector("#three");
var numberFour = document.querySelector("#four");
var numberFive = document.querySelector("#five");
var numberSix = document.querySelector("#six");
var numberSeven = document.querySelector("#seven");
var numberEight = document.querySelector("#eight");
var numberNine = document.querySelector("#nine");
var numberTen = document.querySelector("#ten");
var numberEleven = document.querySelector("#eleven");
var numberTwelve = document.querySelector("#twelve");


var gameOverScreen = document.querySelector(".game-over");
var gameEndScreen =document.querySelector(".game-end");
var gameBox = document.querySelector(".box");
var restartbutton = document.querySelector("#restart");
var startButton = document.querySelector("#start");



function clearColorAfterPlayerClick(){
  console.log(player.playerOrder, computer.flash)
  if(!player.win){
    setTimeout(()=>{
     clearColor();
     if (player.playerOrder.length === 0) {
       gameTurn();
     }
    },900)
  }

}
numberOne.addEventListener("click", event => {
  if (computer.computerFlashing) {
    return;
  }

  player.playerOrder.push(1);
  check();
  numberOne.style.backgroundColor = "lightblue";
   clearColorAfterPlayerClick()
}); 

numberTwo.addEventListener("click", event => {
  if (computer.computerFlashing) {
    return;
  }

  player.playerOrder.push(2);
  check();
  numberTwo.style.backgroundColor = "lightblue";
  clearColorAfterPlayerClick()
});
numberThree.addEventListener("click", event => {
  if (computer.computerFlashing) {
    return;
  }

  player.playerOrder.push(3);
  check();
  numberThree.style.backgroundColor = "lightblue";
   clearColorAfterPlayerClick()
});
numberFour.addEventListener("click", event => {
  if (computer.computerFlashing) {
    return;
  }

  player.playerOrder.push(4);
  check();
  numberFour.style.backgroundColor = "lightblue";
   clearColorAfterPlayerClick()
});
numberFive.addEventListener("click", event => {
  if (computer.computerFlashing) {
    return;
  }

  player.playerOrder.push(5);
  check();
  numberFive.style.backgroundColor = "lightblue";
   clearColorAfterPlayerClick()
});
numberSix.addEventListener("click", event => {
  if (computer.computerFlashing) {
    return;
  }

  player.playerOrder.push(6);
  check();
  numberSix.style.backgroundColor = "lightblue";
  clearColorAfterPlayerClick()
});
numberSeven.addEventListener("click", event => {
  if (computer.computerFlashing) {
    return;
  }

  player.playerOrder.push(7);
  check();
  numberSeven.style.backgroundColor = "lightblue";
   clearColorAfterPlayerClick()
});
numberEight.addEventListener("click", event => {
  if (computer.computerFlashing) {
    return;
  }

  player.playerOrder.push(8);
  check();
  numberEight.style.backgroundColor = "lightblue";
   clearColorAfterPlayerClick()
});
numberNine.addEventListener("click", event => {
  if (computer.computerFlashing) {
    return;
  }

  player.playerOrder.push(9);
  check();
  numberNine.style.backgroundColor = "lightblue";
   clearColorAfterPlayerClick()
});
numberTen.addEventListener("click", event => {
  if (computer.computerFlashing) {
    return;
  }

  player.playerOrder.push("#");
  check();
  numberTen.style.backgroundColor = "lightblue";
   clearColorAfterPlayerClick()
});
numberEleven.addEventListener("click", event => {
  if (computer.computerFlashing) {
    return;
  }

  player.playerOrder.push("@");
  check();
  numberEleven.style.backgroundColor = "lightblue";
   clearColorAfterPlayerClick()
});
numberTwelve.addEventListener("click", event => {
  if (computer.computerFlashing) {
    return;
  }

  player.playerOrder.push("$");
  check();
  numberTwelve.style.backgroundColor = "lightblue";
   clearColorAfterPlayerClick()
});



startButton.addEventListener("click", event => {
  play();
});


function play() {
  player.win = false;
  turnCounter.value = computer.turn - 1;
  player.good = true;
  computer.createComputerOrder();
  computer.computerTurn = true;
  gameTurn();
}


function gameTurn() {
  clearColor();
  if(computer.flash==computer.turn){
    computer.computerTurn = false;
    
  }
  if (computer.computerTurn) {
    computer.flashCards();
  }
}

function clearColor() {
  numberOne.style.backgroundColor = "#100a1c";
  numberTwo.style.backgroundColor = "#100a1c";
  numberThree.style.backgroundColor = "#100a1c";
  numberFour.style.backgroundColor = "#100a1c";
  numberFive.style.backgroundColor = "#100a1c";
  numberSix.style.backgroundColor = "#100a1c";
  numberSeven.style.backgroundColor = "#100a1c";
  numberEight.style.backgroundColor = "#100a1c";
  numberNine.style.backgroundColor = "#100a1c";
  numberTen.style.backgroundColor = "#100a1c";
  numberEleven.style.backgroundColor = "#100a1c";
  numberTwelve.style.backgroundColor = "#100a1c";
}
function check() {
  if (player.playerOrder[player.playerOrder.length - 1] != computer.computerOrder[player.playerOrder.length - 1]) {
    player.good = false;
    //alert("You loose  when player order and comporder value is not match");
    gameOverScreen.style.display = "block";
    gameBox.style.opacity = "0.4";
    //gameBody.style.backgroundImage =.opacity = "0.5";


    return;

    //console.log(
      //"player.playerOrder[player.playerOrder.length-1]    ",
      //player.playerOrder[player.playerOrder.length - 1]
    //);
    //console.log(
     // "computer.computerOrder[player.playerOrder.length-1]  ",
     // computer.computerOrder[player.playerOrder.length - 1]
   // );
  }
  if (player.playerOrder.length == 20 && player.good) {
    player.win = true;
    //alert("you won");
    winGame();
    gameEndScreen.style.display = "block";
    gameBox.style.opacity = "0.4";
  }
   if (!player.good) {
    
    alert("under if check good==false of check function");
   }
  if (computer.turn == player.playerOrder.length && player.good && !player.win) {
    console.log("'when player turn and not win");
    computer.turn++;
    player.playerOrder = [];
    computer.computerTurn = true;
    turnCounter.value = computer.turn - 1;
  }
}
function winGame(){
  player.win=true;
  turnCounter.value = "Win!";
}






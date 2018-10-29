 var computerOrder =[];
 var playerOrder =[];
var flash;
 var turn;
 var good;
 var compTurn;
 var intervalId;
 var noise= true;
 var start;
 var win;




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
var startButton = document.querySelector("#start");





startButton.addEventListener('click',(event)=>{
     play();
  
});
function play(){

    win=false;
    computerOrder =[];
    playerOrder=[];
    flash =0;
    intervalId =0;
    turn = 1;
    turnCounter.value = turn-1;
    good = true;
     for(var i = 0;i<20;i++){
        computerOrder.push(Math.floor(Math.random()*9+1));
    }
    compTurn = true;

    intervalId = setInterval(gameTurn, 1800);

  }
  function gameTurn() {
    if (flash == turn) {
      clearInterval(intervalId);
      compTurn = false;
      clearColor();
     
    }
  if (compTurn) {
    clearColor();
    console.log("compturn ", computerOrder[flash]);
    setTimeout(() => {
      if (computerOrder[flash] == 1) one();
      if (computerOrder[flash] == 2) two();
      if (computerOrder[flash] == 3) three();
      if (computerOrder[flash] == 4) four();
      if (computerOrder[flash] == 5) five();
      if (computerOrder[flash] == 6) six();
      if (computerOrder[flash] == 7) seven();
      if (computerOrder[flash] == 8) eight();
      if (computerOrder[flash] == 9) nine();
      flash++;
    }, 400);
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

}
function one() {
  
  numberOne.style.backgroundColor = "lightblue";
}
function two() {
  
  numberTwo.style.backgroundColor = "lightblue";
}

function three() {
  
  numberThree.style.backgroundColor = "lightblue";
}

function four() {
  
  numberFour.style.backgroundColor = "lightblue";
}

function five() {
  
  numberFive.style.backgroundColor = "lightblue";
}
function six() {
  
  numberSix.style.backgroundColor = "lightblue";
}
function seven() {
  
  numberSeven.style.backgroundColor = "lightblue";
}
function eight() {
  
  numberEight.style.backgroundColor = "lightblue";
}
function nine() {
  
  numberNine.style.backgroundColor = "lightblue";
}
function flashColor() {
  numberOne.style.backgroundColor = "lightblue";
  numberTwo.style.backgroundColor = "lightblue";
  numberThree.style.backgroundColor = "lightblue";
  numberFour.style.backgroundColor = "lightblue";
  numberFive.style.backgroundColor = "lightblue";
  numberSix.style.backgroundColor = "lightblue";
  numberSeven.style.backgroundColor = "lightblue";
  numberEight.style.backgroundColor = "lightblue";
  numberNine.style.backgroundColor = "lightblue";

}  
  
numberOne.addEventListener('click', (event) => {
  //if (on) {
    playerOrder.push(1);
    check();
    one();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 900);
    }
  //}
})

numberTwo.addEventListener('click', (event) => {
  //if (on) {
    playerOrder.push(2);
    check();
    two();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 900);
    }
  //}
})

numberThree.addEventListener('click', (event) => {
  //if (on) {
    playerOrder.push(3);
    check();
    three();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 900);
    }
 // }
})

numberFour.addEventListener('click', (event) => {
  //if (on) {
    playerOrder.push(4);
    check();
    four();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 900);
    }
  //}
})
numberFive.addEventListener('click', (event) => {
  //if (on) {
    playerOrder.push(5);
    check();
    five();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 900);
    }
  //}
})

numberSix.addEventListener('click', (event) => {
  //if (on) {
    playerOrder.push(6);
    check();
    six();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 900);
    }
  //}
})

numberSeven.addEventListener('click', (event) => {
  //if (on) {
    playerOrder.push(7);
    check();
    seven();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 900);
    }
  //}
})

numberEight.addEventListener('click', (event) => {
  //if (on) {
    playerOrder.push(8);
    check();
    eight();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 900);
    }
 // }
})

numberNine.addEventListener('click', (event) => {
  //if (on) {
    playerOrder.push(9);
    check();
    nine();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 900);
    }
 // }
})


function check() {
  if (playerOrder[playerOrder.length - 1] !== computerOrder[playerOrder.length - 1])
    {
      good = false;
      alert("You Loose");
      console.log("when player order and comp order element value not match");
      console.log("playerOrderValue  ",playerOrder[playerOrder.length - 1]);
      console.log("computerOrderValue  ",computerOrder[playerOrder.length - 1]);
      
    }
  if (playerOrder.length == 20 && good) {
    console.log("WOn");
    winGame();
  }

  if (good == false) {
    console.log("under if check good==false of check function");
    flashColor();
    //turnCounter.value = "NO!";
    alert("Your score is "+ turnCounter.value);
    // setTimeout(() => {
    //   turnCounter.value = turn;
    //   clearColor();
    //   // play();
    // }, 1000);


  }

  if (turn == playerOrder.length && good && !win) {
    console.log("when player turn and not win ");
    turn++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    turnCounter.value = turn-1;
    intervalId = setInterval(gameTurn, 800);
  }

}

function winGame() {
  flashColor();
  turnCounter.value = "WIN!";
  //on = false;
  win = true;
}




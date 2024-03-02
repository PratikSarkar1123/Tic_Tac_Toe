let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newBtn = document.querySelector("#New");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;

const win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turn0 = true;
  enableBox();
  msgContainer.classList.add("hide");
};

const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBox();
};

const checkWinner = () => {
  for (let pattern of win) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("Winner", pos1val);
        showWinner(pos1val);
      }
    }
  }
};

const gameDraw = () => {
  msg.innerText = `Game is Draw`;
  msgContainer.classList.remove("hide");
  disableBox();
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box is clicked");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
      box.style.color = "green";
    } else {
      box.innerText = "X";
      turn0 = true;
      box.style.color = "red";
    }
    box.disabled = true;
    count++;
    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

newBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);

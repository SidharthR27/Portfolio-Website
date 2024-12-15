
const mainDiv = document.querySelector("#grid-container");
const winRequirements = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let cells = ["", "", "", "", "", "", "", "", ""];
let ifWin = false;
let currPlayer = "1";

mainDiv.addEventListener("click", (event) => {
  const targetDiv = event.target;
  if (targetDiv.classList.contains("item") &&!(targetDiv.classList.contains("player1") || targetDiv.classList.contains("player2")) ) {
    if (currPlayer === "1") {
      targetDiv.classList.add("player1");
      const cellIndex = targetDiv.getAttribute("index");
      cells[cellIndex] = "1";
      checkWin(currPlayer);
      if(ifWin){
        ifWin=false;
        return
      }
      else {currPlayer = "2";}
       

    }
    else {
      targetDiv.classList.add("player2");
      const cellIndex = targetDiv.getAttribute("index");
      cells[cellIndex] = "2";
      checkWin(currPlayer);
      if(ifWin){
        ifWin=false;
        currPlayer = "1";
        return
      }
      currPlayer = "1";
      
    }
  }

}
);


const checkWin = (currPlayer) => {
  for (winRequirement of winRequirements) {
    const cellA = winRequirement[0];
    const cellB = winRequirement[1];
    const cellC = winRequirement[2];

    if (!(cells[cellA] === "" || cells[cellB] === "" || cells[cellB] === "")) {
      if (cells[cellA] === currPlayer && cells[cellB] === currPlayer && cells[cellC] === currPlayer) {
        alert(`Player ${currPlayer} won`);
        ifWin = true;
        reset();

      }}
    }

if(!cells.includes("")){
  alert("Its a draw!")
  reset();
}
}

const reset = () => {
  const items = mainDiv.children;
  for (const item of items) {
    item.classList.remove("player1", "player2");
  }
  cells = ["", "", "", "", "", "", "", "", ""];
}

const resetBtn = document.querySelector("button");
resetBtn.addEventListener("click",reset);

const container = document.querySelector(".container")
const newGridBtn = document.querySelector("#newGridBtn");

function createGrid(gridDimension) {
  console.log(gridDimension);
  for (let i = 0; i < gridDimension ** 2; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);

    square.style.width = (1 / gridDimension * 100) + "%";

    square.addEventListener("mouseover", function() {
      square.style.backgroundColor = "blue";
    })
  }
}

function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

createGrid(16);

newGridBtn.addEventListener("click", function() {
  gridDimension = prompt("What should be the dimension of the new grid?", "");
  gridDimension = Number(gridDimension);
  if (!Number.isInteger(gridDimension) || gridDimension <= 0 || gridDimension > 100) {
    alert("Error, please enter a number between 1 and 100.");
  } else {
    clearGrid();
    createGrid(gridDimension);
  }

})

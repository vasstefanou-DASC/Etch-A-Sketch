const projectName = document.createElement("h1");
projectName.classList.add("parts");
projectName.textContent = "Etch-A-Sketch";
document.body.appendChild(projectName);

const buttonsArea = document.createElement("div");
buttonsArea.classList.add("parts");
const buttonNames = ["Choose your grid","Clear Sketch","Random Color","Opacity Mode"];
for (let i=0;i<4;i++) {
    const button = document.createElement("button");
    button.textContent = buttonNames[i];
    buttonsArea.appendChild(button);
}
document.body.appendChild(buttonsArea);

const sketchContainer = document.createElement("div");
sketchContainer.classList.add("container");
function createBoxes(boxesSide) {
    deleteBoxes();
    const size = 480/boxesSide;
    for (let i=0;i<boxesSide**2;i++) {
        const sketchBox = document.createElement("div");
        sketchBox.classList.add("box");
        sketchBox.style.width = `${size}px`;
        sketchBox.style.height = `${size}px`;
        sketchBox.addEventListener('mouseenter', () => {
            sketchBox.style.backgroundColor = "hsla(182,100%,50%)";
        });
        sketchContainer.appendChild(sketchBox);
    }
}
createBoxes(16);
document.body.appendChild(sketchContainer);

function deleteBoxes() {
    while (sketchContainer.lastElementChild) {
        sketchContainer.removeChild(sketchContainer.lastElementChild);
    }
}

const newGridButton = document.querySelectorAll("button").item(0);
newGridButton.addEventListener("click", () => {
    while(true) {
        let gridSize = +prompt("What will be the new grid size (Maximum 100)?: ");
        if (gridSize <= 100 && gridSize > 0) {
            createBoxes(gridSize);
            break;
        }
        alert("Please enter a number between 1 and 100");
    }
});

function repaintRandom() {
    let boxes = sketchContainer.querySelectorAll(".box");
    for (let box of boxes) {
        let randomColor = Math.floor(Math.random()*360);
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = `hsla(${randomColor},100%,50%)`;
        });
    }
}
const randomColorButton = buttonsArea.children[2];
randomColorButton.addEventListener("click", repaintRandom);

function clearSketch() {
    let boxes = sketchContainer.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.backgroundColor = "hsl(0,0%,100%)";
    });
}
const clearSketchButton = buttonsArea.children[1];
clearSketchButton.addEventListener("click",clearSketch);
